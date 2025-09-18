import React, { useEffect, useRef } from 'react';
import './NeuralBackground.css';

const NODES = 20;
const LINES = 32;

const COLORS = [
  { line: '#00eaff', node: '#00eaff', glow: '#00eaff' }, // cyan/blue
  { line: '#a259ff', node: '#a259ff', glow: '#a259ff' }, // purple
  { line: '#ff2fd6', node: '#ff2fd6', glow: '#ff2fd6' }, // magenta
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const generateNodes = () => {
  return Array.from({ length: NODES }, (_, i) => {
    const color = COLORS[i % COLORS.length];
    return {
      x: randomBetween(0.1, 0.9),
      y: randomBetween(0.1, 0.9),
      r: randomBetween(4, 8),
      color,
      dx: randomBetween(-0.03, 0.03),
      dy: randomBetween(-0.03, 0.03),
    };
  });
};

const generateLines = (nodes) => {
  const lines = [];
  for (let i = 0; i < LINES; i++) {
    const a = Math.floor(Math.random() * nodes.length);
    let b = Math.floor(Math.random() * nodes.length);
    while (b === a) b = Math.floor(Math.random() * nodes.length);
    const color = COLORS[(a + b) % COLORS.length];
    lines.push({ a, b, color });
  }
  return lines;
};

const NeuralBackground = () => {
  const nodesRef = useRef(generateNodes());
  const linesRef = useRef(generateLines(nodesRef.current));

  // Animate nodes (gentle floating)
  useEffect(() => {
    const interval = setInterval(() => {
      nodesRef.current = nodesRef.current.map((node) => {
        let newX = node.x + node.dx * 0.002;
        let newY = node.y + node.dy * 0.002;
        if (newX < 0.05 || newX > 0.95) node.dx *= -1;
        if (newY < 0.05 || newY > 0.95) node.dy *= -1;
        return {
          ...node,
          x: Math.min(0.95, Math.max(0.05, newX)),
          y: Math.min(0.95, Math.max(0.05, newY)),
        };
      });
      window.dispatchEvent(new Event('resize'));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Re-render on window resize or animation
  const [, setTick] = React.useState(0);
  useEffect(() => {
    const rerender = () => setTick((t) => t + 1);
    window.addEventListener('resize', rerender);
    return () => window.removeEventListener('resize', rerender);
  }, []);

  const nodes = nodesRef.current;
  const lines = linesRef.current;
  const w = window.innerWidth;
  const h = window.innerHeight;

  return (
    <div className="neural-bg-wrapper">
      <svg
        className="neural-bg"
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}
      >
        {lines.map((line, i) => (
          <line
            key={i}
            x1={nodes[line.a].x * w}
            y1={nodes[line.a].y * h}
            x2={nodes[line.b].x * w}
            y2={nodes[line.b].y * h}
            stroke={line.color.line}
            strokeOpacity="0.18"
            strokeWidth="2.2"
            style={{ filter: `drop-shadow(0 0 6px ${line.color.glow})` }}
          />
        ))}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.x * w}
            cy={node.y * h}
            r={node.r}
            fill={node.color.node}
            opacity="0.32"
            style={{ filter: `blur(1.5px) drop-shadow(0 0 12px ${node.color.glow})` }}
          />
        ))}
      </svg>
      <div className="neural-bg-vignette" />
    </div>
  );
};

export default NeuralBackground; 