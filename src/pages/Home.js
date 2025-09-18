import React, { useState } from 'react';
import TypewriterTerminal from '../components/TypewriterTerminal/TypewriterTerminal';
import ProfilePhoto from '../components/ProfilePhoto/ProfilePhoto';
import './Home.css';

// Your existing home lines - keep exactly the same
const homeLines = [
  { type: 'text', text: 'Welcome to my digital portfolio!' },
  { type: 'text', text: 'I am Abhishek Kumar, a passionate Software Developer.' },
  { type: 'text', text: 'Explore my projects, skills, research, and more.' },
  { type: 'text', text: 'Navigate using the menu below:' },
  { type: 'menu', text: 'Home', path: '/' },
  { type: 'menu', text: 'Projects', path: '/projects' },
  { type: 'menu', text: 'Skills', path: '/skills' },
  { type: 'menu', text: 'Research / Patent', path: '/research' },
  { type: 'menu', text: 'Contacts', path: '/contacts' },
];

// NEW: Landing page typewriter lines
const landingLines = [
  { type: 'text', text: 'Initializing Abhishek Kumar Portfolio System...' },
  { type: 'text', text: 'Loading professional profile data...' },
  { type: 'text', text: 'STATUS: Software Developer' },
  { type: 'text', text: 'SPECIALIZATION: GenAI/ML, Full Stack, IoT, Research' },
  { type: 'text', text: 'CREDENTIALS: 2+ Research Papers|1 Patent|10+ Projects' },
  { type: 'text', text: 'EDUCATION: B.Tech Computer Science Engineering' },
  { type: 'text', text: 'Core Technologies:' },
  { type: 'text', text: '  → Generative AI & Machine Learning' },
  { type: 'text', text: '  → Full Stack Web Development' },
  { type: 'text', text: '  → IoT & Smart Automation Systems' },
  { type: 'text', text: '  → Quantum Computing Research' },
  { type: 'text', text: 'System ready. Click below to access portfolio.' },
];

const Home = () => {
  // NEW: Add landing state
  const [showLanding, setShowLanding] = useState(true);

  // NEW: Landing page view
  if (showLanding) {
    return (
      <div className="landing-page">
        <div className="landing-header">
          <ProfilePhoto size="large" />
          <div className="landing-info">
            <h1>Abhishek Kumar</h1>
            <h2>Software Developer</h2>
          </div>
        </div>
        
        <TypewriterTerminal lines={landingLines} prompt="$" />
        
        <button 
          className="enter-portfolio-btn"
          onClick={() => setShowLanding(false)}
        >
          Enter Portfolio
        </button>
      </div>
    );
  }

  // EXISTING: Your original home page - unchanged
  return (
    <div className="home-container">
      <button 
        className="back-to-landing"
        onClick={() => setShowLanding(true)}
      >
        ← Back to Landing
      </button>
      
      {/* Your existing professional header - keep same */}
      <section className="professional-header">
        <div className="header-content">
          <ProfilePhoto size="large" className="main-profile" />
          <div className="professional-intro">
            <h1 className="name-title">Abhishek Kumar</h1>
            <h2 className="role-title">Software Developer</h2>
            <div className="expertise-tags">
              <span className="tag">GenAI/ML</span>
              <span className="tag">Full Stack</span>
              <span className="tag">Data Science</span>
              <span className="tag">Quantum Computing Research</span>
            </div>
            <p className="professional-summary">
              Passionate about creating innovative solutions using cutting-edge technology, 
              with expertise in AI, automation, and quantum computing applications.
            </p>
          </div>
        </div>
      </section>
      
      {/* Your existing terminal - keep same */}
      <TypewriterTerminal lines={homeLines} prompt="$" />
    </div>
  );
};

export default Home;