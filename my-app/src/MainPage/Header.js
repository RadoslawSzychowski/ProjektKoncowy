import React from 'react';
import '../CSS/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <p>Arcana</p>
      </div>
      
      <div className="header__right">
        <button className="header__button">Start</button>
        <button className="header__button">How to play</button>
        <button className="header__button">Info</button>
        <button className="header__button">Log In</button>
      </div>
    </header>
  );
}

export default Header;
