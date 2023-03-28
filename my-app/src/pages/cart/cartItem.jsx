import React from 'react'
import './cart.css'
import { useContext,  } from 'react'
import { ShopContext } from '../../context/shop-context'

export const CartItem = (props) => {
    const {id, productName, price, image} = props.data
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
  return (
    <div className='cartItem'>
        <img src={image} alt="cover"/>
        <div className='description'>
            <p>{" "}<b>{productName}</b></p>
            <p>£{price}</p>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
