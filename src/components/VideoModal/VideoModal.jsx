import React from 'react';
import { X } from 'lucide-react';
import './VideoModal.css';

export default function VideoModal({ isOpen, onClose, videoSrc, title }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={22} />
        </button>
        <div className="video-player-wrapper">
          <video 
            controls 
            autoPlay 
            playsInline
            src={videoSrc || "/assets/images/2026/08/zuperled_hero_720p_ultralight.mp4"}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        {title && <h4 className="video-modal-title">{title}</h4>}
      </div>
    </div>
  );
}
