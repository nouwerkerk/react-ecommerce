import React from 'react'
import './../styles/Cart.css'

const Cart = ( { shoppingCart } ) => {
  return (
    <div className="cart">
      <h2 className="yorha-h2">Shopping Cart</h2> 
      <table className="yorha-table">
        <thead>
          <tr>
            <th>Weapon</th>
            <th>Cost Per Item</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          { Object.keys(shoppingCart).map((weaponName) => {
            const weapon = shoppingCart[weaponName]
            const amount = weapon.amount
            const cost = weapon.cost
            return (
              <tr>
                <td>{`${weaponName}`}</td>
                <td>{`${cost}`}</td>
                <td>{`${amount}`}</td>
              </tr>              
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Cart