import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBarBrand = () => (
  <div className="navbar-brand">
    <a
      className="navbar-item"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
    </a>
    <NavLink to="/" className="navbar-item nav-home">
      <h1>My Workouts</h1>
    </NavLink>
  </div>
);

export default HeaderBarBrand;
