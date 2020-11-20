import React from 'react';
import Achievements from './Component/Achievements/Achievements';
import DedicatedTeams from './Component/DedicatedTeams/DedicatedTeams';
import StayRunning from './Component/StayRunning/StayRunning';
import WhatWeDo from './Component/WhatWeDo/WhatWeDo';

function App() {
  return (
    <div>
      <WhatWeDo></WhatWeDo>
      <StayRunning></StayRunning>
      <Achievements></Achievements>
      <DedicatedTeams></DedicatedTeams>

      
    </div>
  );
}

export default App;
