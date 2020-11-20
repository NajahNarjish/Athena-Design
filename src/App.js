import React from 'react';
import Achievements from './Component/Achievements/Achievements';
import DedicatedTeams from './Component/DedicatedTeams/DedicatedTeams';
import StayRunning from './Component/StayRunning/StayRunning';
import WhatWeDo from './Component/WhatWeDo/WhatWeDo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './Component/Header/HeaderNav/HeaderNav';
import Banner from './Component/Header/Banner/Banner';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <Router>
      <HeaderNav/>
      <Banner/>
      <WhatWeDo/>
      <StayRunning/>
      <Achievements></Achievements>
      <DedicatedTeams></DedicatedTeams>
      <Contact></Contact>
    </Router>   
  );
}

export default App;
