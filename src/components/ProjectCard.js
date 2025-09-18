import React, { useState } from 'react';
import './ProjectCard.css';

const tagColors = {
  ML: '#00eaff',
  Web: '#a259ff',
  'UI/UX': '#ff2fd6',
};

const ProjectCard = ({ project }) => {
  const [showAI, setShowAI] = useState(false);
  const [aiState, setAIState] = useState('prompt'); // 'prompt', 'thankyou'

  const handleY = (e) => {
    e.stopPropagation();
    window.open(project.link, '_blank', 'noopener,noreferrer');
    setShowAI(false);
    setAIState('prompt');
  };

  const handleN = (e) => {
    e.stopPropagation();
    setAIState('thankyou');
    setTimeout(() => {
      setShowAI(false);
      setAIState('prompt');
    }, 1200);
  };

  return (
    <div
      className="project-card"
      onMouseEnter={() => setShowAI(true)}
      onMouseLeave={() => { setShowAI(false); setAIState('prompt'); }}
    >
      <div className="project-header">
        <span className="project-tag" style={{ background: tagColors[project.type] || '#fff' }}>{project.type}</span>
        <span className="project-title">{project.title}</span>
      </div>
      <div className="project-desc">{project.description}</div>
      {showAI && (
        <div className="ai-hover-box">
          {aiState === 'prompt' ? (
            <>
              <span className="ai-emoji">🤖</span>
              <span>Would you like me to open this project for you? </span>
              <button className="ai-btn" onClick={handleY}>Y</button>
              <button className="ai-btn" onClick={handleN}>N</button>
            </>
          ) : (
            <span className="ai-thankyou">Thank you!</span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
