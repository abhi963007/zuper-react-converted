import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  return (
    <a 
      href="https://wa.me/919100045619?text=Hello%20Zuper%20LED%20team%2C%20I%20have%20an%20inquiry%20regarding%20your%20LED%20display%20products."
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      aria-label="Chat with Zuper LED on WhatsApp"
    >
      <span className="whatsapp-ping"></span>
      <MessageCircle size={26} className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with OEM Engineer</span>
    </a>
  );
}
