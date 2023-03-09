import './../styles/Header.css'
import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={require('./../images/logo.png')} height={20}/>
      </div>
    </div>
  )
}

export default Header