import React from 'react';
import './ContactCard.css';

const ContactCard = ({ icon, platform, link, label }) => {
  return (
    <a href={link} className="contact-card" target="_blank" rel="noopener noreferrer">
      <div className="contact-icon">{icon}</div>
      <div className="contact-info">
        <h4>{platform}</h4>
        <p>{label}</p>
      </div>
    </a>
  );
};

export default ContactCard;
