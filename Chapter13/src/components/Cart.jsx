import React, { useState } from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import EmptyCart from './EmptyCart'

const Cart = () => {

    const cartItem = useSelector((store)=>store.cart.items)
    // console.log(cartItem)

    //If food cart is empty then it will display EmptyCart component.
    if(cartItem.length == 0) return <EmptyCart/>

    //useDispatch is dispatch action of reducer.
    const dispatch = useDispatch();
    const HandleClearCart = ()=>{
        dispatch(clearCart())
    }

  return (
    <div className='cart-container'>
        <div className="cart">
            <h2>Cart</h2>
            <ItemList items={cartItem} button="Remove Items"/>
            <button className='clear-cart' onClick={HandleClearCart}>Clear Cart</button>
        </div>
    </div>
  )
}

export default Cart