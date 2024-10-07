import React from 'react'
import classes from './ButtonWhiteBig.module.css'

const ButtonWhiteBig = (props) => {
  return (
    <button className={classes.ButtonWhiteBig }>
      {props.children}
    </button>
  )
}

export default ButtonWhiteBig