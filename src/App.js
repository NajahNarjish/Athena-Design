import React from 'react';
import StayRunning from './Component/StayRunning/StayRunning';
import WhatWeDo from './Component/WhatWeDo/WhatWeDo';
import "./App.css"

function App() {
  return (
    <div >
      <WhatWeDo></WhatWeDo>
      <StayRunning></StayRunning>
      <div style={{height: '100px'}} className="delete"></div>

      
    </div>
  );
}

export default App;
