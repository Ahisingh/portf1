import React, { useState } from 'react';
import './ResearchCard.css';

const ResearchCard = ({ research }) => {
  const [showAI, setShowAI] = useState(false);
  const [aiState, setAIState] = useState('prompt');

  const handleY = (e) => {
    e.stopPropagation();
    window.open(research.link, '_blank', 'noopener,noreferrer');
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
      className="research-card"
      onMouseEnter={() => setShowAI(true)}
      onMouseLeave={() => {
        setShowAI(false);
        setAIState('prompt');
      }}
    >
      <div className="research-header">
        <span className="research-tag">{research.type}</span>
        <span className="research-title">{research.title}</span>
      </div>
      <div className="research-desc">{research.description}</div>
      {showAI && (
        <div className="ai-hover-box">
          {aiState === 'prompt' ? (
            <>
              <span className="ai-emoji">📄</span>
              <span>Want to view this paper/patent?</span>
              <button className="ai-btn" onClick={handleY}>Y</button>
              <button className="ai-btn" onClick={handleN}>N</button>
            </>
          ) : (
            <span className="ai-thankyou">Got it!</span>
          )}
        </div>
      )}
    </div>
  );
};

export default ResearchCard;
