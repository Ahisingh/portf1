import React from 'react';
import TypewriterTerminal from '../components/TypewriterTerminal/TypewriterTerminal';
import ProjectCard from '../components/ProjectCard';
import ProfilePhoto from '../components/ProfilePhoto/ProfilePhoto';

const projects = [
  {
    title: 'Morse Code to Text Converter Through Eye Blink as Input',
    type: 'ML',
    description: 'An AI/ML model that translates Morse code signals into readable English text, demonstrating sequence modeling and NLP.',
    link: 'https://github.com/Ahisingh/morse-code-to-text-using-Eye-blinking',
  },
  {
    title: 'Heathily',
    type: 'ML',
    description: 'A machine learning system that analyzes patient data to recommend personalized treatments or healthcare actions.',
    link: 'https://github.com/Ahisingh/Healthily',
  },
  {
    title: 'Recipe Maker',
    type: 'Web',
    description: 'A web application to create, manage, and share recipes, with ingredient suggestions and meal planning features.',
    link: 'https://github.com/Ahisingh/recipe-maker',
  },
  {
    title: 'Expense Tracker',
    type: 'Web',
    description: 'A web app for tracking expenses, visualizing spending, and managing budgets.',
    link: 'https://github.com/Ahisingh/expense-tracker',
  },
  {
    title: 'Gamified Swiggy App',
    type: 'UI/UX',
    description: 'A gamified redesign concept for the Swiggy food delivery app to enhance user engagement and experience.',
    link: 'https://github.com/Ahisingh/Gamified-Swiggy-App',
  },
];

const introLines = [
  { type: 'text', text: 'This is the project section, take a look at various projects.' },
  { type: 'text', text: 'If you want me to take you to other pages, kindly click on the pages name given here.' },
  { type: 'menu', text: 'Home', path: '/' },
  { type: 'menu', text: 'Projects', path: '/projects' },
  { type: 'menu', text: 'Skills', path: '/skills' },
  { type: 'menu', text: 'Research / Patent', path: '/research' },
  { type: 'menu', text: 'Resume', path: '/resume' },
  { type: 'menu', text: 'Contacts', path: '/contacts' },
];

const Projects = () => {
  return (
    <div>
      <ProfilePhoto size="small" className="floating-identity" />
      <TypewriterTerminal lines={introLines} prompt={"$"} />
      <div style={{ maxWidth: 900, margin: '2rem auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
