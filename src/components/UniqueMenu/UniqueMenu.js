import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './UniqueMenu.css';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Research / Patent', path: '/research' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contacts', path: '/contacts' },
];

const UniqueMenu = () => {
  const location = useLocation();
  return (
    <nav className="unique-menu">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`menu-card${location.pathname === item.path ? ' active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default UniqueMenu;