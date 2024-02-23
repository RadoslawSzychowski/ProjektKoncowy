import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './MainPage/Header';
import Content from './MainPage/Content';
import Footer from './MainPage/Footer';


function App() {


  return (
    <Router basename="/">
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
