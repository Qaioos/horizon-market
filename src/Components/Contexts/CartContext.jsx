import React, {  createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cartitems, setcartitems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // the quantity

    const increaseQuantity = (id) => {
        setcartitems((previtems) =>
            previtems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    };

    const decreaseQuantity = (id) => {
        setcartitems((pre) =>
            pre.map((item) =>
                item.id === id && item.quantity != 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            ),
        );
    };

    //  The Remove From Cart 
    const removeFromCart = (id) => {
        setcartitems(pre => pre.filter((item)=> item.id !== id))
    }

    const addToCart = (item) => {
        setcartitems((previtems) => [...previtems, { ...item, quantity: 1 }]);
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartitems));
    }, [cartitems]);

    return (
        <CartContext.Provider
            value={{ cartitems, addToCart, increaseQuantity, decreaseQuantity ,removeFromCart}}
        >
            {children}
        </CartContext.Provider>
    );
}
