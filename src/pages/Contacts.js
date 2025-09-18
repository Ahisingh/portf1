import React from 'react';
import './Contacts.css';
import TypewriterTerminal from '../components/TypewriterTerminal/TypewriterTerminal';
import ContactCard from '../components/ContactCard/ContactCard';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const introLines = [
  { type: 'text', text: "Welcome to Abhishek's Contact Section." },
  { type: 'text', text: "Want to collaborate or have something in mind?" },
  { type: 'text', text: "Connect with me via links or drop an enquiry below 👇" },
  { type: 'menu', text: 'Home', path: '/' },
  { type: 'menu', text: 'Projects', path: '/projects' },
  { type: 'menu', text: 'Skills', path: '/skills' },
  { type: 'menu', text: 'Research / Patent', path: '/research' },
  { type: 'menu', text: 'Resume / Experience', path: '/resume' },
  { type: 'menu', text: 'Contacts', path: '/contacts' }
];

const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_i4k9hbb', // ← replace with your EmailJS service ID
      'template_tnf63io', // ← replace with your EmailJS template ID
      e.target,
      'tBnLYRXwZXJ3INBFu'   // ← replace with your EmailJS public key
    )
    .then(() => alert("Message sent successfully!"))
    .catch(() => alert("Failed to send message."));
    
    e.target.reset();
  };

  return (
    <div className="contacts-page">
      <TypewriterTerminal lines={introLines} prompt="$" />

      <div className="contact-card-grid">
        <ContactCard
          icon={<FaLinkedin />}
          platform="LinkedIn"
          link="https://www.linkedin.com/in/abhishek-kumar-860798245/"
          label="Connect with me"
        />
        <ContactCard
          icon={<FaGithub />}
          platform="GitHub"
          link="https://github.com/Ahisingh"
          label="See my work"
        />
        <ContactCard
          icon={<FaEnvelope />}
          platform="Gmail"
          link="mailto:singhabhishek.kiit@gmail.com"
          label="Let's talk"
        />
      </div>

      <form className="contact-form" onSubmit={sendEmail}>
        <h3>Enquiry Form</h3>
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="reply_to" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contacts;
