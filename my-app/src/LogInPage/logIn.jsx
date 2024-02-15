import React, { useState } from 'react';
import './Login.scss';
import BackgroundVideo from '../images/loginVid.mp4';
import { useAuth } from '../SupaBase/useAuth';


// Komponent RightSidebar
const LogIn = () => {
  // niestandardowy hook useAuth do zarządzania autoryzacją użytkownika
  const { user, signUp, login, logout } = useAuth();

  // lokalne stany dla email, hasła i stanu logowania
  const [email, setEmail] = useState(''); // lokalny stan dla email
  const [password, setPassword] = useState(''); // lokalny stan dla hasła
  const [isLoggingIn, setIsLoggingIn] = useState(true); // lokalny stan dla określenia, czy użytkownik loguje się czy rejestruje

  // Funkcja obsługująca logowanie/rejestrację
  const handleAuthAction = async (e) => {
    e.preventDefault();
    // Jeśli użytkownik loguje się, wywołaj funkcję login, w przeciwnym razie wywołaj signUp
    if (isLoggingIn) {
      await login(email, password);
    } else {
      await signUp(email, password);
    }
  };


  return (
    <div className="right-sidebar">
      {user ? (
        // Jeśli użytkownik jest zalogowany, wyświetl powitanie i przycisk wylogowania
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        // Jeśli użytkownik nie jest zalogowany, wyświetl alternatywny widok
        <div className="container">
          <div className="background-container">
            <video src={BackgroundVideo} autoPlay muted loop className="background-video" />
            <div className="overlay"></div>
          </div>
          <div className="login-panel">
            <form onSubmit={handleAuthAction}>
              <div className="inputs">
                <input type="email" className="input-login" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input
                  type="password"
                  className="input-password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn-login">{isLoggingIn ? 'Login' : 'Sign Up'}</button>
              <button type="button" className="btn-toggle" onClick={() => setIsLoggingIn(!isLoggingIn)}>
                {isLoggingIn ? 'Need an account? Sign Up' : 'Have an account? Login'}
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
