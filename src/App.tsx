import React from 'react';
import logo from './logo.svg';
import Button_1 from './component/button_1';
import Button_2 from './component/button_2';
import './App.css';
import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);


  return (
    <div className="app_r">
      <div className="App_e">
        <header className="App-header">
        </header>
        <div>0</div>
        <div className="App_d">
          <Button_1 />
          <Button_2 />
        </div>
      </div>
    </div>
  );


}

export default App;
