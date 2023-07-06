import React from 'react'
import './../styles/Button.css'

const Button = ({ onClick, name, text, isDisabled }) => {
  return (
    <button disabled={isDisabled && "disabled"} onClick={() => onClick(name)}>{`${text}`}</button>
  )
}

export default Button