import React from 'react'
import './../styles/Cart.css'

const Cart = ( { shoppingCart, onSelectChange } ) => {
  return (
    <div className="cart">
      <h2 className="yorha-h2">Shopping Cart</h2> 
      <table className="yorha-table">
        <thead>
          <tr>
            <th width='50%'>Weapon</th>
            <th>Cost Per Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(shoppingCart).map((weaponName) => {
            const weapon = shoppingCart[weaponName]
            const amount = weapon.amount
            const cost = weapon.cost
            return (
              <tr key={weaponName}>
                <td>{`${weaponName}`}</td>
                <td>{`${cost}`}</td>
                <td>
                  <select className="yorha-select full" defaultValue={'1'} onChange={(e) => onSelectChange(e, weaponName)}>
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </select>  
                </td>
              </tr>              
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Cart