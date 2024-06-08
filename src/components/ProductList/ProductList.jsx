import React, { useState } from 'react'
import product from '../../api/product.json'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'
import './ProductList.css'
import { useSelector } from 'react-redux'
import CartButtons from './CartButtons/index'


function ProductList() {

  const { cartCount, cartList } = useSelector((state)=> state.cart);

 console.log(cartList);
  return (
    <section className='container'>
    {product.map((product, index) => (
      <div className='product-container' key={index}>
        <h2>{product.productname}</h2>
        <img src={product.image} alt={product.productname} />
        <h3>{product.title}</h3>
        <CartButtons product={product}/> 
      </div>      
    ))}
  </section>
  
  )
}

export default ProductList
