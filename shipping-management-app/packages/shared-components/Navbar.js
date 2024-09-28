// apps/customer-portal/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ links }) => {
    return (
      <nav className="navbar">
        <ul className="navbar-menu">
          {links.map((link) => (
            <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
          ))}
        </ul>
      </nav>
    );
  };
 

export default Navbar;
