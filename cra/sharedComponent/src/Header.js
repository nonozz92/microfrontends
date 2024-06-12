import React from 'react';

const headerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const h1Style = {
  marginLeft: '20px',
};

const navStyle = {
  marginRight: '20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
};

const Header = () => (
  <header style={headerStyle}>
    <h1 style={h1Style}>My Application</h1>
    <nav style={navStyle}>
      <a href="#home" style={linkStyle}>Home</a>
      <a href="#about" style={linkStyle}>About</a>
      <a href="#contact" style={linkStyle}>Contact</a>
    </nav>
  </header>
);

export default Header;
