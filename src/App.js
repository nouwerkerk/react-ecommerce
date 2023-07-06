import './styles/App.css';
import Items from './components/Items'
import Header from './components/Header';
import Cart from './components/Cart';

import { useEffect, useState } from 'react';

function App() {
  const [shoppingCart, setShoppingCart] = useState({})
  const weapons = [
    {
      name: "Virtuous Treaty",
      level: '2',
      text: 'A white katana kept by samurai of the East.',
      dmg_min: '270',
      dmg_max: '324',
      lt: '5',
      hv: '2',
      other: [],
      cost: 1000
    },
    {
      name: "Virtuous Contract",
      level: '4',
      text: 'A white blade used by samurai of the east.',
      dmg_min: '1,140',
      dmg_max: '1,254',
      lt: '4',
      hv: '3',
      other: [],
      cost: 1000
    },
    {
      name: "Virtuous Grief",
      level: 1,
      text: 'Weapons made of white armor from the East.',
      dmg_min: 120,
      dmg_max: 150,
      lt: 5,
      hv: 2,
      other: [],
      cost: 3000
    },
    {
      name: "Test",
      level: 1,
      text: 'Weapons made of white armor from the East.',
      dmg_min: 120,
      dmg_max: 150,
      lt: 5,
      hv: 2,
      other: [],
      cost: 3000
    }
  ]

  const addWeaponToCart = (weaponName) => {
    weapons.map((weapon) => {
      if (weapon.name === weaponName && !(weaponName in shoppingCart)) {
        setShoppingCart({...shoppingCart, [weaponName]: {amount: 1, cost: weapon.cost}})
      }
    }
  )}

  const onAmountChange = (event, weaponName) => {
    const value = parseInt(event.target.value)
    if (value == 0) {
      setShoppingCart((prevState) => {
        const newState = { ...prevState }
        delete newState[weaponName]
        return newState
      })
    }
    else {
      setShoppingCart((prevState) => ({
        ...prevState,
        [weaponName]: {
          ...prevState[weaponName],
          'amount': value
        }
      }))
    }
  }

  return (
    <>
      <Header />
      <div className="body-grid">
        <Items weapons={weapons} shoppingCart={shoppingCart} onAdd={addWeaponToCart}/>
        <Cart shoppingCart={shoppingCart} onSelectChange={onAmountChange}/>
      </div>
    </>
  );
}

export default App;