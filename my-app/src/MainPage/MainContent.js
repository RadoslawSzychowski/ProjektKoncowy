import React, { useState } from 'react';

import '../CSS/Content.scss';
import imgcontent1 from '../images/imgcontent1.png';
import imgcontent2 from '../images/imgcontent2.png';
import imgcontent3 from '../images/imgcontent3.png';
import SectionImg1 from '../images/SectionImg1.jpg';
import SectionImg2 from '../images/SectionImg2.jpg';
import SectionImg3 from '../images/SectionImg3.jpg';
import SectionImg4 from '../images/symbols.webp';
import Carousel from '../Carousel/Carousel';

const MainContent = () => {
  const [videoStarted, setVideoStarted] = useState(false);

  const startVideo = () => {
    setVideoStarted(true);
  };

  return (
<>
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
      <img className="icons-world-introduction" src={SectionImg4} alt="Icons" />
      <section className="world-introduction">
        <div className="content-container-world-introduction">
          
          <div className="video-container-world-introduction">
            <video autoPlay muted loop className="background-video-world-introduction">
              <source src={require('../images/sectionVid.mp4')} type="video/mp4" />
            </video>
          </div>
          <h2>Discover the World of Arcana</h2>
          <p>Embark on an epic journey through mystical lands. Explore ancient ruins, enchanted forests, and treacherous dungeons. Each environment in the World of Arcana is filled with unique challenges, hidden secrets, and ancient lore waiting to be unraveled.</p>
          <div className="images-world-introduction">
            <img src={SectionImg2} alt="Character1" />
            <img src={SectionImg1} alt="Character2" />
            <img src={SectionImg3} alt="Character3" />
          </div>
          <a href="/login" className="explore-button">Play Now</a>
        
        </div>
      </section>
      <Carousel />
    </>
  );
}

export default MainContent;
