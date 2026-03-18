import React, { useContext } from "react";
import logo from "../../img/logo.png";

// Css Module
import "../../css/header.css";
//React Router
import { Link } from "react-router-dom";

//React Icons
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";

//React Component
import { CartContext } from "../Contexts/CartContext";

export default function TopHeader() {
    const { cartitems } = useContext(CartContext);
    
    return (
        <div className="top_header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>

                <form action="" className="search_box">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="search for products"
                    />
                    <button type="submit">
                        <FaSearch />
                    </button>
                </form>

                <div className="header_icons">
                    <div className="icon">
                        <FaRegHeart />
                        <span className="count">0</span>
                    </div>

                    <div className="icon">
                        <Link to="/cart">
                            <TiShoppingCart />
                            <span className="count">{cartitems.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
