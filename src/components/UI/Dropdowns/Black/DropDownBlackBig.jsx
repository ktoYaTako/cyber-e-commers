import React from 'react'
import classes from './DropDownBlackBig.module.css'

const DropDownBlackBig = ({options, defaultValue}) => {
  return (
    <select className={classes}>
        <option disabled value="">{defaultValue}</option>
          {options.map(option =>
              <option ket={option.value} value={option.value}>
                  {option.name}
              </option>
          )}
    </select>
  )
}

export default DropDownBlackBig