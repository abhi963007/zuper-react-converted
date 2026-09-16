import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import './ProjectsPages.css';

export default function ProjectsIndexPage({ onOpenQuote }) {
  const { sectorSlug } = useParams();
  const [selectedSector, setSelectedSector] = useState(sectorSlug || 'all');

  useEffect(() => {
    if (sectorSlug) {
      setSelectedSector(sectorSlug);
    }
  }, [sectorSlug]);

  const sectors = [
    { slug: 'all', label: 'All Projects' },
    { slug: 'advertising-projects', label: 'Advertising' },
    { slug: 'education-projects', label: 'Education' },
    { slug: 'government-projects', label: 'Government' },
    { slug: 'religious-projects', label: 'Religious' },
    { slug: 'rental-events-projects', label: 'Rental & Events' },
    { slug: 'sports-projects', label: 'Sports' }
  ];

  // Filter projects based on slug or show all
  const filteredSectors = selectedSector === 'all'
    ? projectsData
    : projectsData.filter((s) => s.slug === selectedSector);

  const activeSectorData = selectedSector !== 'all'
    ? projectsData.find((s) => s.slug === selectedSector)
    : null;

  return (
    <div className="projects-page">
      <div className="page-header container">
        <span className="heading-tag">
          <Sparkles size={13} /> Proven Installations Across India
        </span>
        <h1 className="page-title">
          {activeSectorData ? activeSectorData.title : "Proof in Every Pixel We Build"}
        </h1>
        <p className="page-subtitle">
          {activeSectorData 
            ? activeSectorData.subtitle 
            : "Explore our real-world LED display installations across commercial DOOH unipoles, government command centers, cricket stadiums, and university auditoriums."}
        </p>

        {/* Sector Tabs */}
        <div className="sector-filter-bar">
          {sectors.map((sec) => (
            <Link
              key={sec.slug}
              to={sec.slug === 'all' ? '/projects' : `/projects/${sec.slug}`}
              className={`sector-btn ${selectedSector === sec.slug ? 'active' : ''}`}
              onClick={() => setSelectedSector(sec.slug)}
            >
              {sec.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        {filteredSectors.map((secGroup) => (
          <div key={secGroup.id} className="sector-group-block">
            {selectedSector === 'all' && (
              <div className="sector-block-header">
                <div>
                  <span className="heading-tag">
                    <span></span> {secGroup.sector} Vertical
                  </span>
                  <h3 className="sector-group-title">{secGroup.title}</h3>
                </div>
                <Link to={`/projects/${secGroup.slug}`} className="sector-view-link">
                  <span>View All {secGroup.sector}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            )}

            <div className="grid-3">
              {secGroup.projects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} />
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="project-banner-cta card-dark text-center">
          <h3>Have a Unique Installation Requirement?</h3>
          <p>
            Our structural engineers calculate custom wind load, optical angles, and steel framing blueprints for non-standard display layouts.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => onOpenQuote()}
            >
              Discuss Your Project Specs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
