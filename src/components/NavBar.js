import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
  <nav className="column is-2 menu">
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <NavLink to="/workouts" activeClassName="active-link">
        Work Outs
      </NavLink>
      <NavLink to="/about" activeClassName="active-link">
        About
      </NavLink>
    </ul>
    {props.children}
  </nav>
);

export default NavBar;