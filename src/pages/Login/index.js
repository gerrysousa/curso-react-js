import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LoginContainer } from './styled';
import { BtnDefaultIcons, BtnDefault } from '../../components/styled';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const LoginPage = () => {
  return (
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
  );
}

const RegisterPage = () => {
  return (
    <LoginContainer>
      <h1 className='organize'>
        <Link to='/'><ArrowBackIosIcon /></Link>
        Crie sua conta</h1>
      <p>Crie sua conta é gratis</p>
      <form>
        <div className='form--input'>
          <label>Nome</label>
          <input type='text' placeholder='Digite seu nome' />
        </div>
        <div className='form--input'>
          <label>E-mail</label>
          <input type='email' placeholder='Digite seu e-mail' />
        </div>
        <div className='form--input'>
          <label>Senha</label>
          <input type='password' placeholder='Digite sua senha' />
        </div>

        <BtnDefault>Cadastrar</BtnDefault>
        <div className='loginFooter'>
          Já tem uma conta? <Link to='/'>Fazer login</Link>
        </div>
      </form>
    </LoginContainer>
  );
}

const Page = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Page;
