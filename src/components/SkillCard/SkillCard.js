import React, { useState } from 'react';
import './SkillCard.css';

const tagColors = {
  Web: '#a259ff',
  ML: '#00eaff',
  'UI/UX': '#ff2fd6',
};

const SkillCard = ({ skill }) => {
  const [showAI, setShowAI] = useState(false);
  const [aiState, setAIState] = useState('prompt');

  const handleY = (e) => {
    e.stopPropagation();
    alert(`Projects using ${skill.name}: ${skill.projects.join(', ') || 'None'}`);
    setShowAI(false);
    setAIState('prompt');
  };

  const handleN = (e) => {
    e.stopPropagation();
    setAIState('thankyou');
    setTimeout(() => {
      setShowAI(false);
      setAIState('prompt');
    }, 1000);
  };

  return (
    <div
      className="skill-card"
      onMouseEnter={() => setShowAI(true)}
      onMouseLeave={() => {
        setShowAI(false);
        setAIState('prompt');
      }}
    >
      <div className="skill-header">
        <span className="skill-tag" style={{ background: tagColors[skill.type] || '#fff' }}>
          {skill.type}
        </span>
        <span className="skill-title">{skill.name}</span>
      </div>
      <div className="skill-desc">{skill.description}</div>
      <div className="skill-desc"><strong>Level:</strong> {skill.level}</div>
      {showAI && (
        <div className="ai-hover-box">
          {aiState === 'prompt' ? (
            <>
              <span className="ai-emoji">🤖</span>
              <span>Wanna see projects using this skill?</span>
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

export default SkillCard;
