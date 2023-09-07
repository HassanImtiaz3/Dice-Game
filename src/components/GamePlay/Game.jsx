import React, { useState } from "react";
import styles from "./Game.module.css";
import RollDice from "../RollDice/RollDice";
// import styled from 'styled-components';

function Game() {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const [score,setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState(null)

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNum) {
      setError('You have not selected any number');
      return;
    } else {
      setError('');
    }
  
    const num = randomNumber(1, 7);
  
    if (selectedNum === num) {
      setScore((prev) => prev + num);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNum(undefined);
    setCurrentDice((prev) => num);
  };
  
  const myScore = (newScore) => {
    setScore(newScore);
  };


  return (
    <>
      <div className='container my-4'>
        <div className="row">
          <div className="col-md-4 ">
            <div className={styles.totalScore}>
              <h1>{score}</h1>
              <p>Total Score</p>
            </div>
          </div>
          <div className="col-md-8 myNumbers" align='center'>
            <p className={styles.myError}>{error}</p>
            <div className={styles.wrapNumber}>
              {arrayNumber.map((value, index) => (
                <div
                  className={`${styles.numberSelector} ${
                    selectedNum === value ? styles.selected : ""
                  }`}
                  key={index}
                  onClick={() => setSelectedNum(value)}
                >
                  {value}
                </div>
              ))}
              
            </div>
            <p>Select Number</p>
          </div>
        </div>
      </div>
      
      <RollDice func={roleDice} cDice={currentDice} myScore={myScore} />

    </>
  );
}

export default Game;

// another way

// const Boxx = styled.div`
//   width: 72px;
//   height: 72px;
//   border: 1px solid black;
//   display: grid;
//   place-items: center;
//   font-size: 24px;
//   font-weight: 700;
//   background-color: black;
//   color: white;
// `;

{
  /* Alternative Way */
}
{
  /* <div className={styles.numberSelector}>1</div>
            <div className={styles.numberSelector}>2</div>
            <div className={styles.numberSelector}>3</div>
            <div className={styles.numberSelector4}>4</div>
            <div className={styles.numberSelector}>5</div>
            <div className={styles.numberSelector}>6</div> */
}
{
  /* <div>
                <Boxx>1</Boxx>
            </div> */
}
