import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../../Page/ProductsDetails";

//React  Icons
import {
    FaStar,
    FaStarHalfAlt,
    FaCartArrowDown,
    FaShare,
    FaRegHeart,
} from "react-icons/fa";

function Proudects({ item }) {
 
    return (
        <div className="product">
            <Link to={`/products/${item.id}`}>
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
                <span>
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
