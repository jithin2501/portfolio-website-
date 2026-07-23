'use client';
import { useEffect, useRef } from 'react';
import '../style/HeroCanvas.css';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let W = 0, H = 0;
    let mx = 0, my = 0;
    let targetMx = 0, targetMy = 0;
    let isMobile = false;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      isMobile = W < 768 || ('ontouchstart' in window);
    };
    resize();

    let mouseMovePending = false;
    const mouseMove = (e: MouseEvent) => {
      targetMx = e.clientX;
      targetMy = e.clientY;
      if (!mouseMovePending) {
        mouseMovePending = true;
        requestAnimationFrame(() => {
          mx = targetMx;
          my = targetMy;
          mouseMovePending = false;
        });
      }
    };

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', mouseMove, { passive: true });

    const logoUrls = [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    ];
    const loadedLogos = logoUrls.map(url => { const img = new Image(); img.src = url; return img; });

    function r(a: number, b: number) { return a + Math.random() * (b - a); }

    class Logo {
      img!: HTMLImageElement;
      x!: number; y!: number; z!: number;
      baseSize!: number; dZ!: number; alpha!: number;
      theta!: number; dTheta!: number;
      color!: string;

      constructor() { this.reset(true); }
      reset(init: boolean) {
        this.img = loadedLogos[Math.floor(Math.random() * loadedLogos.length)];
        this.x = r(-800, 800); this.y = r(-500, 500);
        this.z = init ? r(-600, 600) : r(200, 800);
        this.baseSize = r(28, 60); this.dZ = r(-0.5, -1.5);
        this.alpha = r(0.15, 0.5);
        this.theta = r(0, Math.PI * 2); this.dTheta = r(-0.01, 0.01);

        const t = Math.random();
        if (t < 0.5) this.color = 'rgba(124,92,255,';
        else if (t < 0.75) this.color = 'rgba(0,229,255,';
        else if (t < 0.9) this.color = 'rgba(255,78,205,';
        else this.color = 'rgba(0,255,136,';
      }
      update() { this.z += this.dZ; this.theta += this.dTheta; if (this.z < -800) this.reset(false); }
      project(px: number, py: number, pz: number) {
        const fov = 500;
        const s = fov / (fov + pz + 300);
        return { x: W / 2 + px * s, y: H / 2 + py * s, s };
      }
      draw() {
        if (!this.img.complete) return;
        const px = this.x + Math.cos(this.theta) * 35;
        const py = this.y + Math.sin(this.theta) * 35;
        const p = this.project(px, py, this.z);
        if (p.s < 0) return;

        const size = this.baseSize * p.s;
        const dist = Math.hypot(p.x - mx, p.y - my);
        const mouseGlow = Math.max(0, 1 - dist / 220);
        let zFade = 1;
        if (this.z > 400) zFade = 1 - (this.z - 400) / 400;
        if (this.z < -600) zFade = 1 - (-600 - this.z) / 200;

        ctx!.globalAlpha = Math.max(0, Math.min(1, (this.alpha + mouseGlow * 0.4) * zFade));
        ctx!.drawImage(this.img, p.x - size / 2, p.y - size / 2, size, size);
      }
    }

    class Particle {
      x!: number; y!: number; rr!: number; a!: number;
      dx!: number; dy!: number; c!: string;

      constructor() { this.reset(); }
      reset() {
        this.x = r(0, W); this.y = r(0, H);
        this.rr = r(0.5, 1.5); this.a = r(0.1, 0.4);
        this.dx = r(-0.2, 0.2); this.dy = r(-0.5, -0.1);
        const t = Math.random();
        this.c = t < 0.5 ? '#7c5cff' : t < 0.75 ? '#00e5ff' : '#ff4ecd';
      }
      update() {
        this.x += this.dx; this.y += this.dy; this.a -= 0.0008;
        if (this.a <= 0 || this.y < 0) this.reset();
      }
      draw() {
        ctx!.globalAlpha = this.a;
        ctx!.beginPath(); ctx!.arc(this.x, this.y, this.rr, 0, Math.PI * 2);
        ctx!.fillStyle = this.c; ctx!.fill();
      }
    }

    const maxLogos = isMobile ? 18 : 32;
    const maxParticles = isMobile ? 35 : 65;

    const LOGOS: Logo[] = [];
    for (let i = 0; i < maxLogos; i++) LOGOS.push(new Logo());

    const PARTS: Particle[] = [];
    for (let i = 0; i < maxParticles; i++) PARTS.push(new Particle());

    function drawBg() {
      const g = ctx!.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#020212'); g.addColorStop(0.5, '#050516'); g.addColorStop(1, '#08082a');
      ctx!.fillStyle = g;
      ctx!.fillRect(0, 0, W, H);
    }

    function drawGrid() {
      const horizon = H * 0.72;
      const vpX = W / 2;
      ctx!.strokeStyle = 'rgba(124,92,255,0.06)';
      ctx!.lineWidth = 1;

      for (let i = 1; i <= 10; i++) {
        const y = horizon + (i / 10) * (H - horizon);
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(W, y);
        ctx!.stroke();
      }
      const numLines = isMobile ? 8 : 14;
      for (let i = -numLines / 2; i <= numLines / 2; i++) {
        ctx!.beginPath();
        ctx!.moveTo(vpX, horizon);
        ctx!.lineTo(W / 2 + i * (W / numLines), H);
        ctx!.stroke();
      }
    }

    let rafId: number;
    function loop() {
      drawBg();
      drawGrid();

      // Simple connection lines
      if (!isMobile) {
        ctx!.lineWidth = 0.5;
        for (let i = 0; i < LOGOS.length; i++) {
          for (let j = i + 1; j < LOGOS.length; j++) {
            const l1 = LOGOS[i], l2 = LOGOS[j];
            const dx = l1.x - l2.x, dy = l1.y - l2.y, dz = l1.z - l2.z;
            const distSq = dx * dx + dy * dy + dz * dz;
            if (distSq < 120000) {
              const p1 = l1.project(l1.x + Math.cos(l1.theta) * 35, l1.y + Math.sin(l1.theta) * 35, l1.z);
              const p2 = l2.project(l2.x + Math.cos(l2.theta) * 35, l2.y + Math.sin(l2.theta) * 35, l2.z);
              if (p1.s > 0 && p2.s > 0) {
                const alpha = (1 - Math.sqrt(distSq) / 350) * 0.12 * Math.min(p1.s, p2.s);
                ctx!.strokeStyle = l1.color + alpha + ')';
                ctx!.beginPath(); ctx!.moveTo(p1.x, p1.y); ctx!.lineTo(p2.x, p2.y); ctx!.stroke();
              }
            }
          }
        }
      }

      LOGOS.sort((a, b) => b.z - a.z);
      LOGOS.forEach(l => { l.update(); l.draw(); });
      PARTS.forEach(p => { p.update(); p.draw(); });

      rafId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="noise"></div>
      <div className="vignette"></div>
    </>
  );
}

