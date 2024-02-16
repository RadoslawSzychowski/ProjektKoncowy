import React, { useState } from 'react';
import './Login.scss';
import BackgroundVideo from '../images/loginVid.mp4';
import { useAuth } from '../SupaBase/useAuth';
import { Link } from 'react-router-dom';



const LogIn = () => {
  const { user, signUp, login, logout } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(true);


  const handleAuthAction = async (e) => {
    e.preventDefault();
    if (isLoggingIn) {
      await login(email, password);
    } else {
      await signUp(email, password);
    }
  };



  return (
    <div className="loggedInPage">
      <div className="background-container">
        <video src={BackgroundVideo} autoPlay muted loop className="background-video" />
        <div className="overlay"></div></div>
      {user ? (
        <div className="loggedIn">
          <p>Welcome, {user.email}</p>
          <p>You have successfully logged in.</p>
          <p>You can either play the game or logout.</p>
          <Link  className='link-btn' to="/Game"> <button className='btn-play'>Play now</button></Link>
          <button className='btn-logout' onClick={logout}>Logout</button>
        </div>
      ) : (

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
                {isLoggingIn ? 'Sign Up' : 'Have an account? Login'}
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
