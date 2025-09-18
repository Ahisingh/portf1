import React from 'react';
import TypewriterTerminal from '../components/TypewriterTerminal/TypewriterTerminal';

const introLines = [
  { type: 'text', text: "Welcome! This is the portfolio of Abhishek Kumar." },
  { type: 'text', text: "Computer Science Engineer passionate about AI, ML, and GenAI." },
  { type: 'text', text: "Let me introduce myself in a unique way..." },
  { type: 'text', text: "Which section would you like me to take you to?" },
  { type: 'menu', text: "Home", path: "/" },
  { type: 'menu', text: "Projects", path: "/projects" },
  { type: 'menu', text: "Skills", path: "/skills" },
  { type: 'menu', text: "Research / Patent", path: "/research" },
  { type: 'menu', text: "Contacts", path: "/contacts" }
];

const Home = () => {
  return (
    <div>
      <TypewriterTerminal lines={introLines} prompt={"$"} />
    </div>
  );
};

export default Home;