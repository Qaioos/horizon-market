//React Hook
import React, { useContext } from "react";

//React Router
import { Link, useNavigate } from "react-router-dom";

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
import { CartContext } from "../../Components/Contexts/CartContext";
import toast from "react-hot-toast";
//css

function Proudects({ item }) {
    const navigate = useNavigate();
    const { cartitems, addToCart } = useContext(CartContext);
    const isInCart = cartitems.some((i) => i.id === item.id);

    const handelAddToCart = () => {
        addToCart(item);
        toast.success(
            <div className="stoast-wrapper">
                <img src={item.images[0]} alt="" className="toast-img" />
                <div className="toast-content">
                    <strong>{item.title}</strong>
                    added to cart
                    <div>
                        <button
                            className="btn"
                            onClick={() => navigate("/cart")}
                        >
                            View Cart
                        </button>
                    </div>
                </div>
            </div>,
            { duration: 3000 },
        );
    };
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
                <span onClick={() => handelAddToCart()} className="">
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
