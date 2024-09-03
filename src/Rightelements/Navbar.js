import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
      >
        About Me
      </NavLink>
      <NavLink
        to="/experience"
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
      >
        Experience
      </NavLink>
      <NavLink
        to="/recommended"
        className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}
      >
        Recommended
      </NavLink>
    </div>
  );
}
