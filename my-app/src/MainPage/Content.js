
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from '../LogInPage/LogIn';
import HowToPlay from '../HowToPlayPage/HowToPlay';
import MainContent from './MainContent';
import Info from '../InfoPage/Info';

const Content = () => {


  return (
  
    
        <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/howToPlay" element={<HowToPlay/>} />
        <Route path="/LogIn" element={<LogIn/>} />
        <Route path="/Info" element={<Info />} />
        </Routes>
           
  
  );
}

export default Content;
