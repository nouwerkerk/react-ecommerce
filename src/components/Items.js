import React from 'react'
import Item from './Item'
import './../styles/Items.css'

const Items = ({ weapons }) => {

  return (
    <div className="items-grid">
      {weapons.map((weapon) => (
        <Item weapon={weapon}/>
      ))}
    </div>
  )
}

export default Items