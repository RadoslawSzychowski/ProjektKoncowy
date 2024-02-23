
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from '../LogInPage/logIn';
import HowToPlay from '../HowToPlayPage/HowToPlay';
import MainContent from './MainContent';
import Info from '../InfoPage/Info';
import Game from '../GamePage/Game';

const Content = () => {


  return (
  
    
        <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/howToPlay" element={<HowToPlay/>} />
        <Route path="/LogIn" element={<LogIn/>} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Game" element={<Game />} />
        </Routes>
           
  
  );
}

export default Content;