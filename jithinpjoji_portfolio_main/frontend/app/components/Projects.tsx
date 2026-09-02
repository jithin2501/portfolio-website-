'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
    LayoutGrid, Laptop, ShoppingCart, 
    Palette, MoreHorizontal, ExternalLink,
    FolderOpen
} from 'lucide-react';
import { projects as staticProjects } from '../../data/staticData';

import '../style/Projects.css';

/* ── DATA ─────────────────────────────────────── */
const categories = [
    { id: 'all', label: 'All Projects', icon: LayoutGrid },
    { id: 'web-app', label: 'Web Apps', icon: Laptop },
    { id: 'e-commerce', label: 'E-Commerce', icon: ShoppingCart },
    { id: 'others', label: 'Others', icon: MoreHorizontal },
];

interface Project {
    id: string;
    name: string;
    categories: string[];
    categoryLabel: string;
    desc: string;
    tech: string[];
    image: string;
}

/* Helper to map backend category strings to local filter ids */
const getNormalizedCategories = (cat: string): string[] => {
    if (!cat) return ['others'];
    const c = cat.toLowerCase();
    const categories: string[] = [];
    if (c.includes('web')) categories.push('web-app');
    if (c.includes('commerce') || c.includes('store') || c.includes('shop')) categories.push('e-commerce');
    if (c.includes('design') || c.includes('ui') || c.includes('ux')) categories.push('design');
    return categories.length > 0 ? categories : ['others'];
};

/* ── COMPONENTS ───────────────────────────────── */

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
    return (
        <div 
            className={`project-card-wrapper ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` } as React.CSSProperties}
        >
            <Link href={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                <div className="project-card">
                    {/* Image Container Showcase */}
                    <div className="mockup-container" style={{ position: 'relative', overflow: 'hidden', height: '220px', borderRadius: '12px' }}>
                        <img 
                            src={project.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"} 
                            alt={project.name} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease' }}
                            className="project-img-display"
                        />
                    </div>

                    <h3 className="project-name" style={{ marginTop: '16px' }}>
                        {project.name}
                    </h3>

                    <p className="project-desc">
                        {project.desc}
                    </p>

                    <div className="project-footer">
                        <div className="project-tech-tags">
                            {project.tech.map((t: string) => (
                                <span key={t} className="project-tech-tag">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <span className="project-link" title="View Project Details">
                            <ExternalLink size={14} />
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const [projects] = useState<Project[]>(() => staticProjects
        .filter((p) => p.featured === 'feature')
        .slice(0, 3)
        .map((p) => ({
            id: p.id,
            name: p.title,
            categories: getNormalizedCategories(p.category || ''),
            categoryLabel: p.category || 'Others',
            desc: p.description,
            tech: p.tech_stack?.map((t) => t.name) || p.tags || [],
            image: p.image
        })));
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (sectionRef.current) observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const filteredProjects = projects.filter(p => 
        activeFilter === 'all' || p.categories.includes(activeFilter)
    );

    return (
        <section id="projects" className="projects-section" ref={sectionRef}>
            <div className="projects-container">
                
                {/* Header */}
                <div className="projects-header-box">
                    <div className="projects-tag">
                        <div className="projects-tag-line" />
                        My Projects
                        <div className="projects-tag-line" />
                    </div>
                    <h2 className="projects-title">
                        Featured <span className="projects-gradient-text">Projects</span>
                    </h2>
                </div>

                {/* Filters */}
                <div className="filters-container">
                    {categories.map(cat => {
                        const Icon = cat.icon;
                        const isActive = activeFilter === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`filter-button ${isActive ? 'active' : ''}`}
                            >
                                <Icon size={16} />
                                {cat.label}
                            </button>
                        );
                    })}
                </div>

                {/* Empty / Zero filtered projects state */}
                {filteredProjects.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '70px 20px 50px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <FolderOpen size={48} style={{ color: '#64748b', strokeWidth: 1.5, marginBottom: '16px' }} />
                        <h3 style={{ color: '#cbd5e1', fontSize: '20px', fontWeight: 600, marginBottom: '8px', letterSpacing: '-0.01em' }}>
                            No Projects Found
                        </h3>
                        <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>
                            There are no projects in the "{categories.find(c => c.id === activeFilter)?.label || activeFilter}" category yet.
                        </p>
                    </div>
                )}

                {/* Grid */}
                {filteredProjects.length > 0 && (
                    <div className="projects-grid">
                        {filteredProjects.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} isVisible={isVisible} />
                        ))}
                    </div>
                )}

                {/* View All Button */}
                <div className="view-all-wrapper">
                    <Link href="/projects" className="view-all-main-btn">
                        <FolderOpen size={20} />
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
