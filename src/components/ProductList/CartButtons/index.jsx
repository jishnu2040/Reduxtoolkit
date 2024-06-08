import React from 'react'
import AfterCart from './AfterCart';
import BeforeCart from './BeforeCart';
import { useSelector } from 'react-redux';
const CartButtons = ({ product }) => {
  

    const { cartList } = useSelector((state)=> state.cart);

    const cartItem = cartList?.find((item) => item?.id === product?.id);
    const cartCount = cartItem ? cartItem.count : 0

    console.log(cartCount.count, "=cartcount");
  return (
    <>
    {cartCount > 0 ? (<AfterCart productID={product.id} cartCount={cartCount}/>
    ): (
    <BeforeCart product={product}/>
    )}
    </>
  )
}

export default CartButtons
