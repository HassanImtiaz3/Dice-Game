import React, { useState } from "react";
import styles from "./RollDice.module.css";
import Button from "../Buttons/Button";
import {BsHeartArrow} from 'react-icons/bs'
import {GiGamepad} from 'react-icons/gi'

function RollDice(props) {

  const resetScore = () =>{
    props.myScore(0)
  }

  const [showRule,setshowRule]= useState(false)

  const toggleRules = () => {
    setshowRule(!showRule);
  }


  return (
    <>
      <div className={styles.diceContainer} onClick={props.func}>
        <img src={`/images/dice_${props.cDice}.png`} alt="Dices" />
        <p>Click on Dice to roll</p>
        <Button name='Reset Score' toggle={resetScore} />
        <br />
        <Button name={showRule ? 'Hide Rules' : 'Show Rules'} toggle={toggleRules} />


        {showRule && (
          <div className={styles.myRules}>
            <h2> <GiGamepad/> How to play dice game</h2>
            <p> <BsHeartArrow/> Select any number.</p>
            <p> <BsHeartArrow/> Click on dice image.</p>
            <p> <BsHeartArrow/> If the selected number is equal to the dice number, you will get the same points as the dice.</p>
            <p> <BsHeartArrow/> If you get the wrong guess, then 2 points will be deducted.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default RollDice;
