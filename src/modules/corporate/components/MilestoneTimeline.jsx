import React from 'react';
import { Calendar, Award } from 'lucide-react';
import './MilestoneTimeline.css';

export default function MilestoneTimeline({ milestones }) {
  if (!milestones) return null;

  return (
    <div className="timeline-container">
      <div className="timeline-track">
        {milestones.map((item, idx) => (
          <div key={idx} className="timeline-node">
            <div className="timeline-dot">
              <span className="dot-inner"></span>
            </div>
            <div className="timeline-content card-dark">
              <span className="timeline-year">
                <Calendar size={13} /> {item.year}
              </span>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
