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
import { Favoret } from "../Contexts/FavoretContext";

export default function TopHeader() {
    const { cartitems } = useContext(CartContext);
    const { favitems } = useContext(Favoret);
    
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
                        <Link to="/favorites">
                        <FaRegHeart />
                        <span className="count">{favitems.length}</span>
                        </Link>
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
