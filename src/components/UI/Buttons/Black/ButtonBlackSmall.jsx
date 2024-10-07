import React from 'react'
import classes from './ButtonBlackSmall.module.css'

const ButtonBlackSmall = (props) => {
  return (
    <button className={classes.ButtonBlackSmall}>
      {props.children}
    </button>
  )
}

export default ButtonBlackSmall