import React from 'react';
import TypewriterTerminal from '../components/TypewriterTerminal/TypewriterTerminal';
import ResearchCard from '../components/ResearchCard/ResearchCard';
import './Research.css'; // optional, if you have styles for layout

const introLines = [
  { type: 'text', text: 'This section features my Research Papers and Patent.' },
  { type: 'text', text: 'Hover over each card for an AI interaction!' },
  { type: 'text', text: 'You can also explore other sections from here.' },
  { type: 'menu', text: 'Home', path: '/' },
  { type: 'menu', text: 'Projects', path: '/projects' },
  { type: 'menu', text: 'Skills', path: '/skills' },
  { type: 'menu', text: 'Research / Patent', path: '/research' },
  { type: 'menu', text: 'Resume', path: '/resume' },
  { type: 'menu', text: 'Contacts', path: '/contacts' },
];

const researchPapers = [
  {
    title: 'Automation and Sensor-based Research',
    description: 'A detailed study on IoT sensors and automation in smart environments.',
    type: 'Research Paper',
    link: `${process.env.PUBLIC_URL}/assets/papers/automation.pdf`
  },
  {
    title: 'Quantum Computing using Game Theory',
    description: 'Optimizing quantum teleportation using game-theoretic strategies.',
    type: 'Research Paper',
    link: `${process.env.PUBLIC_URL}/assets/papers/quantum.pdf`
  }
];

const patents = [
  {
    title: 'IoT-based Smart Device Patent',
    description: 'Patent published for an IoT device that monitors health conditions remotely.',
    type: 'Patent',
    link: `${process.env.PUBLIC_URL}/assets/patent/patent1.pdf`
  }
];

const Research = () => {
  return (
    <div>
      <TypewriterTerminal lines={introLines} prompt="$" />
      
      <div className="section-wrapper">
        <h2 className="section-title">Research Papers</h2>
        <div className="card-container">
          {researchPapers.map((paper, index) => (
            <ResearchCard key={index} research={paper} />
          ))}
        </div>

        <h2 className="section-title">Patents</h2>
        <div className="card-container">
          {patents.map((patent, index) => (
            <ResearchCard key={index} research={patent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
