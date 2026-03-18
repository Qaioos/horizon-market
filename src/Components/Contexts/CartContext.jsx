import React, { Children, createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {

    const [cartitems  , setcartitems] = useState(()=>{
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : []
    })
    const addToCart =(item) => {
        setcartitems((previtems) => [...previtems, item])

    }

    useEffect(() => {
        localStorage.setItem("cartItems" , JSON.stringify(cartitems))
    },[cartitems])

  return (
    <CartContext.Provider value={{cartitems , addToCart}}>
        {children}
    </CartContext.Provider>
  )
}
