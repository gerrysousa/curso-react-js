import React from 'react';
import { HeaderContainer } from './styled';

function Header() {
  return (
    <HeaderContainer >
      <div className='container'>
        <div className='logo'>
          <img src="../../../logo.png" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </nav>
      </div>

    </HeaderContainer>
  );
}

export default Header;
