import React, { useContext } from "react";
//React  Icons
import { FaStar, FaStarHalfAlt, FaShare, FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../Components/Contexts/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Favoret } from "../../Components/Contexts/FavoretContext";

export default function ProductInfo({ product }) {
    const { cartitems, addToCart } = useContext(CartContext);
    const { favitems, addToFav ,removeFav} = useContext(Favoret);
    const Navigate = useNavigate()
        const isInCart = cartitems.some((i) => i.id === product.id);

        const handelAddToCart = () => {
            addToCart(product)
        toast.success(
            <div className="stoast-wrapper">
                <img src={product.images[0]} alt="" className="toast-img" />
                <div className="toast-content">
                    <strong>{product.title}</strong>
                    added to cart
                    <div>
                        <button
                            className="btn"
                            onClick={() => Navigate("/cart")}
                        >
                            View Cart
                        </button>
                    </div>
                </div>
            </div>,
            { duration: 3000 },
        );
    };

    const isInFav = favitems.some((i) => i.id === product.id);
    const handelAddToFav =()=>{
        if(isInFav){
            toast.error(`${product.title} Remove from Favoreties`)
            removeFav(product.id)
 
        }else{
            toast.success(`${product.title} added to favoreties`)
            addToFav(product)
        }
    }


    return (
        <div className="details_item">
            <h1 className="name">{product.title}</h1>
            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </div>
            <p className="price">$ {product.price}</p>
            <h5>
                {" "}
                Availability: <span>{product.availabilityStatus}</span>
            </h5>
            <h5>
                {" "}
                Brand: <span>{product.brand}</span>
            </h5>
            <p className="desc"> {product.description} </p>
            <h5>
                {" "}
                <span>
                    Hurry Up! Only {product.stock} products left in stock.
                </span>
            </h5>
            <button className={`btn ${isInCart ? 'in-cart' : ""}`} onClick={handelAddToCart} >
               {isInCart? 'Item i Cart' :  " Add to cart"} <TiShoppingCart />
            </button>
            <div className="icons">
                <span onClick={()=> handelAddToFav()} className={` ${isInFav ? 'in-fav' : ""}`}>
                    <FaRegHeart />
                </span>
                <span>
                    <FaShare />
                </span>
            </div>
        </div>
    );
}
