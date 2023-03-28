import React from 'react'
import { Products } from '../../products'
import {Product} from './product'
import './shop.css'

export const Shop = () => {
    // console.log("this is the product array",Products)
  return (
    <div className='shop'>
        <div className='shopTitle'>
        <h1>Game Shop</h1>
        </div>
        {/* - map through the dummy products array of items inside a products component.
            - create a prop called data which has all the data for each product*/}
        <div className='products'>{Products.map(products => <Product data = {products}/>)}</div>
    </div>
  )
}
