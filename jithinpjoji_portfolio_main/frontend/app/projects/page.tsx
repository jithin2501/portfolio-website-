'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, LayoutGrid, Laptop, 
  ShoppingCart, Palette, MoreHorizontal, 
  Star, ArrowRight, FolderOpen 
} from 'lucide-react';
import { projects as staticProjects } from '../../data/staticData';
import '../style/ProjectsPage.css';

const categories = [
  { id: 'All', label: 'All Projects', icon: LayoutGrid },
  { id: 'Web Apps', label: 'Web Apps', icon: Laptop },
  { id: 'E-Commerce', label: 'E-Commerce', icon: ShoppingCart },
  { id: 'Design', label: 'Design', icon: Palette },
  { id: 'Others', label: 'Others', icon: MoreHorizontal },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects] = useState(staticProjects);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => {
        // Match category case-insensitively or exactly
        return project.category?.toLowerCase() === activeCategory.toLowerCase();
      });

  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* Header */}
        <header className="projects-header">
          <div className="projects-tag">
            <span className="projects-tag-line" />
            MY WORK
            <span className="projects-tag-line" />
          </div>
          <h1 className="projects-title">
            My <span className="projects-gradient-text">Projects</span>
          </h1>
          <p className="projects-subtitle">
            Here are some of the projects I've worked on. 
            Each project represents my passion for learning and building.
          </p>
        </header>

        {/* Filters */}
        <div className="projects-filters">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                suppressHydrationWarning
              >
                <Icon size={16} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '70px 20px 50px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <FolderOpen size={48} style={{ color: '#64748b', strokeWidth: 1.5, marginBottom: '16px' }} />
            <h3 style={{ color: '#cbd5e1', fontSize: '20px', fontWeight: 600, marginBottom: '8px', letterSpacing: '-0.01em' }}>
              No Projects Found
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>
              There are no projects in the "{activeCategory}" category yet.
            </p>
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 && (
          <div className="projects-grid">
            {filteredProjects.map((project) => {
              // Dynamically map tech stack to tags array
              const tags = project.tech_stack && project.tech_stack.length > 0
                ? project.tech_stack.map((tech: any) => tech.name)
                : (project.tags || []);
              
              const liveUrl = project.live_url || "#";
              const githubUrl = project.github_url || "#";

              return (
                <div key={project.id} className="project-card-new">
                  <div className="project-img-box">
                    <Link href={`/projects/${project.id}`}>
                      {project.featured === 'feature' && (
                        <div className="featured-badge" style={{ background: 'linear-gradient(135deg, #ffd700, #ff8c00)', color: '#000', fontWeight: 'bold' }}>
                          <Star size={12} fill="black" />
                          Featured
                        </div>
                      )}
                      {project.featured === 'new' && (
                        <div className="featured-badge" style={{ background: 'linear-gradient(135deg, #10b981, #059669)', color: '#fff', fontWeight: 'bold' }}>
                          <Star size={12} fill="white" />
                          New
                        </div>
                      )}
                      {project.featured === 'freelancing' && (
                        <div className="featured-badge" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', color: '#fff', fontWeight: 'bold' }}>
                          <Star size={12} fill="white" />
                          Freelance
                        </div>
                      )}
                      <img src={project.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"} alt={project.title} className="project-img-placeholder" />
                    </Link>
                  </div>

                  <div className="project-info-new">
                    <div className="project-header-new">
                      <Link href={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h3 className="project-title-new">{project.title}</h3>
                      </Link>
                      {liveUrl && liveUrl !== '#' && (
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="external-link-btn" title="Live Preview">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <p className="project-desc-new">{project.description}</p>
                    
                    {tags.length > 0 && (
                      <div className="project-tags-new">
                        {tags.map((tag: string) => (
                          <span key={tag} className="tag-new">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="project-footer-new">
                    <Link href={`/projects/${project.id}`} className="view-details-btn">
                      View Details
                      <ArrowRight size={16} />
                    </Link>
                    {githubUrl && githubUrl !== '#' && (
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-btn-new">
                        GitHub
                        <i className="fab fa-github" style={{ fontSize: '18px' }} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
