import React from 'react';
import './Header.css';
import logo from '../images/logo.png';
import cowalaText from '../images/cowalaText.png';

function Header () {
    return (
      <header className="container-header">
        <div>
          <img src={ logo } alt="cowala-logo" />
        </div>
        <div>
          <img src={ cowalaText } alt="cowala-text" />
        </div>
      </header>
    );
}

export default Header;