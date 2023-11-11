import React, { useState } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import './styles/App.scss'
import HardSkills from './Components/HardSkills/HardSkills';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {


  return (
    <div className="App">
      {/* <Header /> */}
      <Home />
      <About/>
      <HardSkills/>
      <Portfolio/>
      <Contacts/>
    </div>
  );
}

export default App;