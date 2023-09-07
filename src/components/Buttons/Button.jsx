import React from 'react'
import styles from './Button.module.css'


function Button(props) {

  const {name,toggle} = props;

  return (
    <>
        <button className={styles.myBtn} onClick={toggle}>
            {name}
        </button>
    </>
  )
}

export default Button
