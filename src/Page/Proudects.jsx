//React Hook
import React, { useContext } from "react";

//React Router
import { Link } from "react-router-dom";

//React  Icons
import {
    FaStar,
    FaStarHalfAlt,
    FaCartArrowDown,
    FaShare,
    FaRegHeart,
    FaCheck,
} from "react-icons/fa";

//React Component
import ProductDetails from "./ProductsDetails";
import { CartContext } from "../Components/Contexts/CartContext";
//css

function Proudects({ item }) {
    const { cartitems, addToCart } = useContext(CartContext);
    const isInCart = cartitems.some((i) => i.id === item.id);

    return (
        <div className={`product ${isInCart ? "in-cart" : ""}`}>
            <Link to={`/products/${item.id}`}>
                <span className="status_cart">
                    <FaCheck />
                    InCart
                </span>
                <div className="img_product">
                    <img src={item.images[0]} alt={item.images[0]} />
                </div>

                <p className="name_product">{item.title}</p>

                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                </div>

                <p className="price">
                    <span>{item.price}</span>
                </p>
            </Link>
            <div className="icons">
                <span onClick={() => addToCart(item)}>
                    <FaCartArrowDown />
                </span>
                <span>
                    <FaRegHeart />
                </span>
                <span>
                    <FaShare />
                </span>
            </div>
        </div>
    );
}

export default Proudects;
