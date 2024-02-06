import React from 'react';
import { HeaderContainer } from './styled';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <HeaderContainer >
      <div className='container'>
        <div className='logo'>
          <img src="../../../logo.png" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </nav>
      </div>

    </HeaderContainer>
  );
}

export default Header;
