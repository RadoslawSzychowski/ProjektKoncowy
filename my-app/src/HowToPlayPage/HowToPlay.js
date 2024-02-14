import React from 'react';
import './HowToPlay.scss';
import ObjectiveImage from './images/objectiveImg.png';
import SetupImage from './images/setupImage.jpeg';
import GameplayImage from './images/gameplayImage.png';
import WinningImage from './images/winningImage.jpg';
import BackgroundVideo from './images/backgroundVideo.mp4';

const HowToPlay = () => {
  return (

    <div className="how-to-play-container">
      <video src={BackgroundVideo} autoPlay muted loop className="background-video" />
    
      <div className="section">
        <div className="section-content">
          <img src={ObjectiveImage} alt="Objective" />
          <div>
            <h3>Objective:</h3>
            <p>The objective of the game is to defeat opponents by strategically playing cards and managing resources. Players aim to reduce their opponents' health points to zero while protecting their own.</p>
          </div>
        </div>
      </div>

    
      <div className="section">
        <div className="section-content">
          <div>
            <h3>Setup:</h3>
            <p>To set up the game, each player shuffles their deck of cards and draws a starting hand. Players then decide who goes first and place any necessary tokens or markers on the game board.</p>
          </div>
          <img src={SetupImage} alt="Setup" />
        </div>
      </div>

   
      <div className="section">
        <div className="section-content">
          <img src={GameplayImage} alt="Gameplay" />
          <div>
            <h3>Gameplay:</h3>
            <p>During gameplay, players take turns playing cards from their hand, summoning creatures, casting spells, and using abilities to gain advantages over their opponents. The game typically follows a series of phases, such as draw, main, combat, and end phases.</p>
          </div>
        </div>
      </div>

     
      <div className="section">
        <div className="section-content">
          <div>
            <h3>Winning:</h3>
            <p>To win the game, players must either reduce their opponent's health points to zero or fulfill specific win conditions outlined by the game rules. This often involves strategic card play, resource management, and anticipating opponent moves.</p>
          </div>
          <img src={WinningImage} alt="Winning" />
        </div>
      </div>
    </div>
  );
};
export default HowToPlay;
