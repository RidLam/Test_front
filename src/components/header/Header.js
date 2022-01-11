import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  return (
    <nav>
      <Link to="/">React Test App</Link>
    </nav>
  );
};

export default Header;