import React from 'react'
import classes from './ButtonBlackBig.module.css'

const ButtonBlackBig = (props) => {
  return (
    <button className={classes.ButtonBlackBig}>
      {props.children}
    </button>
  )
}

export default ButtonBlackBig