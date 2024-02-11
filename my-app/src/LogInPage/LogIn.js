import React, { useState } from 'react';
import gifBackground from '../images/loginVid.gif';
import './Login.scss';

const LogIn = () => {
  // Stan dla danych logowania
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  // Obsługa zmiany danych logowania
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Obsługa logowania
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę logowania
    console.log('Dane logowania:', loginData);
  };

  return (
    <div className="login-container">
      <div className="background-container">
        <img src={gifBackground} alt="Background" className="background-gif" />
        <div className="overlay"></div> {/* Dodajemy overlay */}
      </div>
      <div className="form-container">
        
        <form onSubmit={handleLoginSubmit}>
          <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} required />
          <input type="password" name="password" placeholder="Hasło" value={loginData.password} onChange={handleLoginChange} required />
          <button type="submit">Zaloguj się</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;