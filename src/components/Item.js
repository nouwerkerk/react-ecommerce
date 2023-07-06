import React from 'react'
import './../styles/Item.css'
import Button from './Button'

const Item = ({ weapon, isDisabled, onAdd }) => {
  return (
    <figure className='yorha-figure'>
      <figcaption className='flex'>
        <div>{`${weapon.name}`}</div>
        <div>Lv: {`${weapon.level}`}</div>
      </figcaption>
      <div className="weapon-img-container">
        <img src={require(`./../images/${weapon.name.toLowerCase().replace(' ', '_')}.png`)}/>
      </div>
      <p className='yorha-p'>{`${weapon.text}`}</p>
      <hr className='yorha-hr'></hr>
      <p className='yorha-p'>Attack: {`${weapon.dmg_min}`} - {`${weapon.dmg_max}`}</p>
      <p className='yorha-p'>Combo: Lt {`${weapon.lt}`} Hv {`${weapon.hv}`}</p>
      <Button onClick={onAdd} name={weapon.name} text={"Add"} isDisabled={isDisabled}/>
    </figure>
  )
}

export default Item