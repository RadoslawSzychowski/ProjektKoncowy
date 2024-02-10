import React, { useState } from 'react';
import '../CSS/Content.scss';
import imgcontent1 from '../images/imgcontent1.png';
import imgcontent2 from '../images/imgcontent2.png';
import imgcontent3 from '../images/imgcontent3.png';

const Content = () => {
  const [videoStarted, setVideoStarted] = useState(false);

  const startVideo = () => {
    setVideoStarted(true);
  };

  return (
    <div className="content" onClick={startVideo}>
      <video src={require('../images/vid.mp4')} autoPlay muted loop className="content__background-video" />
      <div className="content__images">
        <div className="content__image">
          <img src={imgcontent1} alt="Img 1" className="content__image__img" /> 
          <p>Build your card collection by acquiring a diverse range of cards with unique abilities, artwork, and rarities. Expand your deck to create powerful combinations and strategies.</p>
        </div>
        <div className="content__image">
          <img src={imgcontent2} alt="Img 2" className="content__image__img" /> 
          <p>Test your skills against challenging AI opponents or engage in thrilling multiplayer battles against friends or online adversaries. Compete in various game modes to showcase your mastery.</p>
        </div>
        <div className="content__image">
          <img src={imgcontent3} alt="Img 3" className="content__image__img" /> 
          <p>Accomplish in-game objectives and milestones to unlock achievements and earn exciting rewards. Progress through the game to discover new cards, cosmetic items, and other valuable bonuses.</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
