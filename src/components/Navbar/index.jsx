import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const cssClassName = 'navbar';
  return (
    <nav className={`${cssClassName}`}>
      <ol className={`${cssClassName}__list`}>
        <li>
          <Link to="/" className={`${cssClassName}__link`}>Users</Link>
        </li>
        <li>
          <Link to="/" className={`${cssClassName}__link`}>Tasks</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
