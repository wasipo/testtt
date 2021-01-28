import React from 'react';
import logo from './logo.svg';
import Button_1 from './component/button_1';
import Button_2 from './component/button_2';
import './App.css';
import { useState } from 'react';

function Welcome(props:any) {
  return <h1>Hello, {props.name}</h1>;

}


const App = () => {

  const [count, setCount] = useState(0);



  return (
    <div className="app_r">
      <div className="App_e">
        <header className="App-header">
        </header>
        <div className="aaad">{count}</div>
        <div className="App_d">
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  );


}

export default App;
