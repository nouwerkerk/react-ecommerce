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
    }
  ]

  const addWeaponToCart = (name) => {
    Object.keys(weapons).map((key) => {
      const weapon = weapons[key]
      if (weapon.name === name) {
        if (Object.keys(shoppingCart).length == 0) {
          setShoppingCart({[name]: {amount: 1, cost: 1000}})
        }
        else {
          !(name in shoppingCart) && setShoppingCart({[name]: {amount: 1, cost: 1000}})
        }
      }
      /*return  &&  
        && !(name in shoppingCart) && */
    })
  }

  return (
    <>
      <Header />
      {addWeaponToCart("Virtuous Grief")}
      <div className="body-grid">
        <Items weapons={weapons} />
        <Cart shoppingCart={shoppingCart}/>
      </div>
    </>
  );
}

export default App;