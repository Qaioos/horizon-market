import React, { useContext, useState } from "react";
import { CartContext } from "../../Components/Contexts/CartContext";

//React Icons
import { FaTrashAlt } from "react-icons/fa";

//css
import "../../css/cart.css";

export default function Cart() {
    const { cartitems, increaseQuantity, decreaseQuantity, removeFromCart } =
        useContext(CartContext);

    const total = cartitems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
    );

    /*   
---------Finish  the  Cart Reduce And Math Adding And deac fromthe  items 
-------- 1_ Add Tost the tell  me  About the Cart include Products 
-------- From React-Hot-Toast 
 */

    return (
        <div className="checkout">
            <div className="ordersummary">
                <h1>Order Summary</h1>
                <div className="items">
                    {cartitems.length === 0 ? (
                        <p>Your Cart is empty. </p>
                    ) : (
                        cartitems.map((item, index) => (
                            <div className="item_cart" key={index}>
                                <div className="image_name">
                                    <img src={item.images[0]} alt="" />
                                    <div className="content">
                                        <h4>{item.title}</h4>
                                        <p className="price_item">
                                            $
                                            {item.quantity > 1
                                                ? (
                                                      item.quantity * item.price
                                                  ).toFixed(2)
                                                : item.price.toFixed(2)}
                                        </p>
                                        <div className="quantity_control">
                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                            >
                                                -
                                            </button>
                                            <span className="quantity">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="delete_item"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <FaTrashAlt />
                                </button>
                            </div>
                        ))
                    )}
                </div>
                <div className="bottom_summary">
                    <div className="shop_table">
                        <p>Total:</p>
                        <span className="total_checkout">
                            ${total.toFixed(2)}
                        </span>
                    </div>
                    <div className="button_div">
                        <button type="submit">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
