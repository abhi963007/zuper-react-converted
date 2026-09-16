import React from 'react';
import './SpecTable.css';

export default function SpecTable({ pitches, title = "Pixel Pitch & Resolution Matrix" }) {
  if (!pitches || pitches.length === 0) return null;

  return (
    <div className="spec-table-container">
      <h3 className="spec-table-title">{title}</h3>
      <div className="table-responsive">
        <table className="spec-table">
          <thead>
            <tr>
              <th>Pitch Model</th>
              {pitches[0].moduleSize && <th>Module Size</th>}
              {pitches[0].resolution && <th>Module Resolution</th>}
              {pitches[0].density && <th>Pixel Density</th>}
              {pitches[0].environment && <th>Environment</th>}
              {pitches[0].transparency && <th>Transparency</th>}
              {pitches[0].idealViewing && <th>Optimal Viewing</th>}
            </tr>
          </thead>
          <tbody>
            {pitches.map((p, idx) => (
              <tr key={idx}>
                <td className="pitch-highlight">{p.pitch}</td>
                {p.moduleSize && <td>{p.moduleSize}</td>}
                {p.resolution && <td>{p.resolution}</td>}
                {p.density && <td>{p.density}</td>}
                {p.environment && <td><span className="env-badge">{p.environment}</span></td>}
                {p.transparency && <td>{p.transparency}</td>}
                {p.idealViewing && <td>{p.idealViewing}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
