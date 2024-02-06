import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { ContainerPage, TitlePage } from '../../components/Main';
import { LoginContainer } from './styled';
import { BtnDefaultIcons, BtnDefault } from '../../components/styled';
import FacebookIcon from '@mui/icons-material/Facebook';


const Page = () => {
  return (
    <BrowserRouter>
      <LoginContainer>
        <h1>Faça login em sua conta</h1>
        <BtnDefaultIcons>
          <FacebookIcon />
          <div className='center'>Entrar com Facebook</div>
        </BtnDefaultIcons>

        <BtnDefaultIcons>
          <FacebookIcon />
          <div className='center'>Entrar com Google</div>
        </BtnDefaultIcons>

        <p>OU</p>

        <form>
          <div className='form--input'>
            <label>E-mail</label>
            <input type='email' placeholder='Digite seu e-mail' />
          </div>
          <div className='form--input'>
            <label>Senha</label>
            <input type='password' placeholder='Digite sua senha' />
          </div>

          <BtnDefault>Entrar</BtnDefault>
          <div className='loginFooter'>
            Não tem uma conta? <Link to='/register'>Registre-se</Link>
          </div>

        </form>


      </LoginContainer>
    </BrowserRouter>
  );
}

export default Page;