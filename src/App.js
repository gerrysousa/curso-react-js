import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async (infoUser) => {
    let newUser = {
      id: infoUser.uid,
      name: infoUser.displayName,
      avatar: infoUser.photoURL
    }
    setUser(newUser);
  }

  if (user === null) {
    return (
      <Login onReceiveGoogle={handleGoogleLogin} />
    );
  }

  return (
    <BrowserRouter >
      <Header user={user} />

      <Routes />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
