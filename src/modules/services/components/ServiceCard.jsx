import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Megaphone, Tv, GraduationCap, Building2, Flame, Tent, Trophy, CheckCircle2, ArrowRight 
} from 'lucide-react';
import './ServiceCard.css';

const iconMap = {
  Megaphone,
  Tv,
  GraduationCap,
  Building2,
  Flame,
  Tent,
  Trophy,
  CheckCircle2
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || CheckCircle2;

  return (
    <div className="service-card">
      <div className="service-icon-wrap">
        <IconComponent size={28} className="service-icon" />
      </div>

      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-h1">{service.h1}</p>
      <p className="service-card-desc">{service.subtitle || service.description}</p>

      {service.keyBenefits && (
        <ul className="service-benefits-list">
          {service.keyBenefits.slice(0, 3).map((b, idx) => (
            <li key={idx}>{b}</li>
          ))}
        </ul>
      )}

      <div className="service-card-footer">
        <Link to={`/services/${service.slug}`} className="service-link">
          <span>Explore Solution</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
