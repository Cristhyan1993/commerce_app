import React, { useContext } from 'react'
import './shop.css'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
    const { id, productName, genre, price, year, description, image} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    console.log(props)
    
  return (
    
    <div className='productCard'>
        <img className="cover" src={image} alt="game cover"/>
        <div className='description'>
            <h2>{productName}</h2>
            <div className='productCard_description'><p>{description}</p></div>
            <p>Year: {year}</p>
            <p>Genre: {genre}</p>
            <p>£{price}</p>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
        </div>
    </div>
  )
}
