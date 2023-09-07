import React, { useState } from 'react';
import MainPage from './components/MainPage/MainPage';
import Game from './components/GamePlay/Game';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev); 
  };

  return (
    <>
      {isGameStarted ? <Game /> : <MainPage toggle={toggleGamePlay} />}
    </>
  );
}

export default App;
