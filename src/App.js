import React, { useEffect, useState } from 'react';
import RandomHalf from './components/RandomHalf.js';
import Lahey from './assets/Lahey.webp';
import './styles/App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    console.log(count);
  }, [count])

  return (
    <div className="App">
      <header className="header-container">
        <img src={Lahey} className="App-logo" alt="logo" />
      </header>
      <div className="footer-container">
        <RandomHalf />
      </div>
    </div>
  );
}

export default App;
