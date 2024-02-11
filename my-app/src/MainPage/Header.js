import React from 'react';
import { Link } from 'react-router-dom'; // Importujemy Link z React Router
import '../CSS/Header.scss';


const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <p><Link to="/">Arcana</Link></p>
      </div>

      <div className="header__right">
        <Link to="/" className="header__link"><button className="header__button">Start</button></Link>
        <Link to="/howtoplay" className="header__link"><button className="header__button">How to play</button></Link>
        <Link to="/info" className="header__link"><button className="header__button">Info</button></Link>
        <Link to="/login" className="header__link"><button className="header__button">Log In</button></Link>
      </div>
    </header>
  );
}

export default Header;
