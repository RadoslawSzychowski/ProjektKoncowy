import React from 'react';
import './Info.scss';
import BackgroundVideo from '../HowToPlayPage/images/backgroundVideo.mp4';
const Info = () => {
  return (
    <div className="how-to-play-container">
      <video src={BackgroundVideo} autoPlay muted loop className="background-video" />
    
      <div className="project-info">
        <p>This project was built using React, SCSS, and Supabase.</p>
        <p>The graphics, videos, and sounds were sourced from the internet.</p>
      </div>
    </div>
  );
};



export default Info;
