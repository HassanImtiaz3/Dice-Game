import React from "react";
import styles from "./MainPage.module.css";
import Button from "../Buttons/Button";

function MainPage(props) {
  return (
    <>
      <div className={`container ${styles.Maincontainer} `}>
        <div className="row">
          <div className="col-md-6">
            <div className={`${styles.Mainimg}`}>
              <img src="/images/main.png" width="100%" alt="Dice Image" />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.Maintext}>
              <h1>Dice Game</h1>
              <Button name="Play Now" toggle={props.toggle} />
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default MainPage;
