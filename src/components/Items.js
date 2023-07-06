import React from 'react'
import Item from './Item'
import './../styles/Items.css'

const Items = ({ weapons, shoppingCart, onAdd }) => {

  return (
    <div className="items-grid">
      {weapons.map((weapon) => {
        return <Item weapon={weapon} onAdd={onAdd} isDisabled={weapon.name in shoppingCart ? 'true' : ''}/>  
      }
  
      )}
    </div>
  )
}

export default Items