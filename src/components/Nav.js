import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav-bar">
    <div className="nav-items">
      <h2>Bookstore CMS</h2>
      <ul className="nav-links">
        <li><Link to="/">Books</Link></li>
        <li><Link to="catagory">Catagories</Link></li>
      </ul>
    </div>
    <img src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/32/000000/external-avatar-interface-anggara-outline-color-anggara-putra.png" alt="Profile" />
  </nav>
);

export default Nav;
