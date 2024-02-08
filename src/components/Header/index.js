import React from 'react';
import { HeaderContainer } from './styled';
import { Link } from 'react-router-dom';

function Header(props) {
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
          <div className='avatar'>
            <img src={props.user.avatar} />
            <label>{props.user.name}</label>
          </div>
        </nav>
      </div>

    </HeaderContainer>
  );
}

export default Header;
