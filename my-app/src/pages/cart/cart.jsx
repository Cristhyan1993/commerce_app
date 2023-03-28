import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import {Products} from '../../products'
import { CartItem } from './cartItem'
import './cart.css'

import {useNavigate} from "react-router-dom"

export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div className='cart'>
    <div><hi>Your Cart Items</hi>
    </div>
    <div className='cartItems'>{Products.map((product) => {
      if(cartItems[product.id] !== 0) {
        return <CartItem data={product}/>}})}</div>
        {totalAmount > 0 ?
        <div className='checkout'>
        
          <p>Subtotal: £{totalAmount} </p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>: <h1>Your cart is empty</h1>}</div>
  )
}
