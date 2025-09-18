/*import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TypewriterTerminal.css';

const TypewriterTerminal = ({ lines, prompt = '$', onComplete }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [typed, setTyped] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (currentLine < lines.length) {
      let cancelled = false;
      let i = 0;
      const line = lines[currentLine];
      function type() {
        if (cancelled) return;
        if (i <= line.text.length) {
          setTyped(line.text.slice(0, i));
          i++;
          setTimeout(type, 30);
        } else {
          setDisplayedLines((prev) => [...prev, line]);
          setTyped('');
          setCurrentLine((prev) => prev + 1);
        }
      }
      type();
      return () => { cancelled = true; };
    } else if (!isDone) {
      setIsDone(true);
      if (onComplete) onComplete();
    }
    // eslint-disable-next-line
  }, [currentLine, lines]);

  return (
    <div className="terminal-box">
      {displayedLines.map((line, idx) => (
        <div key={idx} className="terminal-line">
          <span className="terminal-prompt">{prompt}</span>{' '}
          {line.type === 'menu' ? (
            <Link to={line.path} className="terminal-menu-link">{line.text}</Link>
          ) : (
            line.text
          )}
        </div>
      ))}
      {currentLine < lines.length && (
        <div className="terminal-line">
          <span className="terminal-prompt">{prompt}</span> {typed}
          <span className="blinking-cursor">|</span>
        </div>
      )}
      {isDone && (
        <div className="terminal-line">
          <span className="terminal-prompt">{prompt}</span>
          <span className="blinking-cursor">|</span>
        </div>
      )}
    </div>
  );
};

export default TypewriterTerminal;*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TypewriterTerminal.css';

const TypewriterTerminal = ({ lines, prompt = '$', onComplete }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      if (onComplete) onComplete();
      return;
    }

    const line = lines[currentLine];
    let charIndex = 0;
    setIsTyping(true);

    const interval = setInterval(() => {
      if (charIndex <= line.text.length) {
        setTypedText(line.text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setDisplayedLines(prev => [...prev, line]);
        setTypedText('');
        setCurrentLine(prev => prev + 1);
        setIsTyping(false);
      }
    }, 25); // Typing speed

    return () => clearInterval(interval);
  }, [currentLine, lines, onComplete]);

  return (
    <div className="terminal-box">
      {displayedLines.map((line, idx) => (
        <div key={idx} className="terminal-line">
          <span className="terminal-prompt">{prompt}</span>
          {line.type === 'menu' ? (
            <Link to={line.path} className="terminal-menu-link">
              {line.text}
            </Link>
          ) : (
            <span>{line.text}</span>
          )}
        </div>
      ))}

      {isTyping && (
        <div className="terminal-line">
          <span className="terminal-prompt">{prompt}</span>
          {typedText}
          <span className="blinking-cursor">|</span>
        </div>
      )}

      {!isTyping && currentLine >= lines.length && (
        <div className="terminal-line">
          <span className="terminal-prompt">{prompt}</span>
          <span className="blinking-cursor">|</span>
        </div>
      )}
    </div>
  );
};

export default TypewriterTerminal;
