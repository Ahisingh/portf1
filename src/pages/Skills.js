import React from 'react';
import TypewriterTerminal from '../components/TypewriterTerminal/TypewriterTerminal';
import SkillCard from '../components/SkillCard/SkillCard';
import './Skills.css';

const introLines = [
  { type: 'text', text: "$ Welcome to Abhishek's Tech Stack!" },
  { type: 'text', text: "$ These are the tools and languages I work with 👇" },
  { type: 'menu', text: "Home", path: "/" },
  { type: 'menu', text: "Projects", path: "/projects" },
  { type: 'menu', text: "Skills", path: "/skills" },
  { type: 'menu', text: "Research / Patent", path: "/research" },
  { type: 'menu', text: "Resume", path: "/resume" },
  { type: 'menu', text: "Contacts", path: "/contacts" },
];

const skills = [
  
  {
    name: "python, OpenCV, ML Algorithms, NLP",
    level: "Advanced",
    type: "Machine Learning",
    description: "Used for data handling, scripting, and Language Processing.",
    projects: ["Morse Code Blinker", "Healthily"]
  },
  {
    name: "python, GenAI models",
    level: "Advanced",
    type: "GenAI",
    description: "A web-based system for automated survey question generation using Generative AI models(OpenAI, Qwen-2.5 1.5B instruct)  ",
    projects: ["Survey Question Generator(Internship Project)"]
  },
  {
    name: "Designing",
    level: "Advanced",
    type: "UI/UX Design",
    description: "Better user experience and interface design",
    projects: ["Gamified Swiggy App"]
  },
  {
    name: "MERN Stack, CSS , HTML, Python",
    level: "Intermediate",
    type: "Web Dev",
    description: "Built dynamic UIs and CRUD applications using React and Python both",
    projects: ["Recipe Maker", "Healthly App", "Expense Tracker"]
  },
  {
    name: "Research",
    level: "Advanced",
    type: "Paper Publications",
    description: "Research papers on Quantum Computing and Automation",
    projects: ["Quantum Computing using Game Theory","Automation and Sensor-based Research"]
  },
];

const Skills = () => {
  return (
    <div className="skills-page">
      <TypewriterTerminal lines={introLines} prompt="$" />
      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
