'use client';
import React, { use, useState } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, CheckCircle2, ArrowLeft, Info
} from 'lucide-react';
import { projects as staticProjects } from '../../../data/staticData';
import '../../style/ProjectDetail.css';

// Tech icon helper mapping for standard dev icons
const getTechIconClass = (techName: string) => {
  const t = techName.toLowerCase();
  if (t.includes('react')) return 'fab fa-react';
  if (t.includes('node')) return 'fab fa-node-js';
  if (t.includes('express')) return 'fas fa-server';
  if (t.includes('mongo')) return 'fas fa-database';
  if (t.includes('firebase')) return 'fas fa-fire';
  if (t.includes('razorpay')) return 'fas fa-credit-card';
  if (t.includes('aws') || t.includes('s3')) return 'fab fa-aws';
  if (t.includes('docker')) return 'fab fa-docker';
  if (t.includes('nginx')) return 'fas fa-network-wired';
  if (t.includes('js') || t.includes('javascript')) return 'fab fa-js';
  if (t.includes('ts') || t.includes('typescript')) return 'fas fa-code';
  if (t.includes('css') || t.includes('tailwind')) return 'fab fa-css3-alt';
  if (t.includes('html')) return 'fab fa-html5';
  if (t.includes('figma')) return 'fab fa-figma';
  if (t.includes('git')) return 'fab fa-github';
  return 'fas fa-microchip';
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = staticProjects.find((item) => item.id === resolvedParams.id) ?? staticProjects[0];

  const [activeThumb, setActiveThumb] = useState(0);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="detail-container" style={{ padding: '100px 20px', textAlign: 'center' }}>
          <Info size={64} style={{ margin: '0 auto 20px auto', opacity: 0.5, color: '#ff4d4d' }} />
          <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Project Not Found</h2>
          <p style={{ opacity: 0.7, marginBottom: '30px' }}>The requested project could not be found.</p>
          <Link href="/projects" className="visit-btn" style={{ display: 'inline-flex', padding: '12px 24px' }}>
            <ArrowLeft size={18} style={{ marginRight: '8px' }} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const categoryLabel = project.category ? project.category.toUpperCase() : "E-COMMERCE PLATFORM";
  const title = project.title || "Sumathi Trends";
  const subtitle = project.subtitle || "Ecommerce Clothing Website";
  const description = project.long_desc || project.description || "A full-stack e-commerce platform for a modern clothing brand.";
  
  const images = project.images && project.images.length > 0 
    ? project.images 
    : [project.image, project.image, project.image, project.image, project.image];
  
  // Format features into string list or array
  const rawFeatures = project.features || [
    "User Authentication (Email & Google)",
    "Product Browsing & Search",
    "Shopping Cart & Wishlist",
    "Secure Checkout with Payment Gateway",
    "Order Tracking",
    "Admin Dashboard",
    "Product & Order Management",
    "Analytics & Reports"
  ];

  const featuresList = rawFeatures.map((f: any) => typeof f === 'string' ? f : (f.title || f.desc || String(f)));

  // Tech stack items
  const techStack = project.tech_stack && project.tech_stack.length > 0
    ? project.tech_stack.map(t => t.name)
    : ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Razorpay", "AWS S3", "Docker", "Nginx"];

  const liveUrl = project.live_url || "#";
  const githubUrl = project.github_url || "#";

  const currentDisplayImg = images[activeThumb] || project.image || images[0];

  return (
    <div className="project-detail-page">
      <div className="detail-container">
        
        {/* Main Clean Card matching reference design */}
        <div className="project-detail-card">
          
          {/* Left Column - Image Showcase */}
          <div className="pd-left-showcase">
            <div className="pd-main-image-wrapper">
              <img 
                src={currentDisplayImg} 
                alt={title} 
                className="pd-main-full-img" 
              />
            </div>

            {/* Thumbnail Row - Interactive Thumbnail Carousel */}
            <div className="pd-thumbnails-row">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`pd-thumb-card ${activeThumb === idx ? 'active' : ''}`}
                  onClick={() => setActiveThumb(idx)}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Project Content */}
          <div className="pd-right-content">
            {/* Category Pill Tag */}
            <div className="pd-category-pill">
              {categoryLabel}
            </div>

            {/* Title */}
            <h1 className="pd-title">{title}</h1>

            {/* Description */}
            <p className="pd-description">{description}</p>

            {/* Technologies Used */}
            <div className="pd-section-block">
              <h4 className="pd-section-title">TECHNOLOGIES USED</h4>
              <div className="pd-tech-grid">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="pd-tech-chip">
                    <i className={getTechIconClass(tech)} />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="pd-section-block">
              <h4 className="pd-section-title">KEY FEATURES</h4>
              <div className="pd-features-grid">
                {featuresList.map((feature, idx) => (
                  <div key={idx} className="pd-feature-item">
                    <CheckCircle2 size={16} className="pd-feature-check" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pd-actions-row">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="pd-btn-primary">
                Live Demo <ExternalLink size={16} />
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="pd-btn-secondary">
                View on GitHub <i className="fab fa-github" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

