import React from 'react'
import classes from '../Styles/Form.module.css'


const SIdeBarComp = ({ text }) => {
  return (
    <div className={classes.formMainDIv}>
    <p>{text}</p>
    </div>
  )
}

export default SIdeBarComp