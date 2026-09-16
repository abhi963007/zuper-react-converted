import React from 'react';
import { MapPin, Maximize2, Zap } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project, onPreview }) {
  return (
    <div className="project-card">
      <div className="project-card-image-wrap" onClick={() => onPreview && onPreview(project)}>
        <img 
          src={project.image || "/assets/images/2026/08/1-1.webp"} 
          alt={project.name} 
          loading="lazy" 
        />
        <div className="project-card-overlay">
          <button type="button" className="overlay-btn" aria-label="View Project Details">
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      <div className="project-card-content">
        <div className="project-meta-row">
          <span className="project-location">
            <MapPin size={13} /> {project.location}
          </span>
          {project.brightness && (
            <span className="project-bright">
              <Zap size={13} /> {project.brightness}
            </span>
          )}
        </div>

        <h3 className="project-title">{project.name}</h3>
        <p className="project-type">{project.type}</p>
        
        {project.size && (
          <div className="project-size-pill">
            Dimension: {project.size}
          </div>
        )}

        <p className="project-desc">{project.description}</p>
      </div>
    </div>
  );
}
