import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import "../css/productdetails.css";
import SlideProudects from "../Components/slide/SlideProudects";
//React  Icons
import { FaStar, FaStarHalfAlt, FaShare, FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

function ProductDetails() {
    const { id } = useParams();
    const [product, setproduct] = useState(null);
    const [isloding, setLoading] = useState(true);

    const [category , setcatecory] = useState(null)
    const [islodingCat, setLoadingCat] = useState(true);

    useEffect(() => {
        const fetchid = async () => {
            try {
                const resoult = await fetch(
                    `https://dummyjson.com/products/${id}`,
                );
                const data = await resoult.json();
                setproduct(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchid();
    }, [id]);


    useEffect(() => {

if (product != null) {
                const fetchCategorie = async () => {
                try {
                    const results = await fetch(`https://dummyjson.com/products/category/${product.category}`);
                    const data = await results.json();
                    console.log(data);
                    setcatecory(data)
                } catch (error) {
                    console.log(error);
                }finally{
                    setLoadingCat(false)
                }
            };
    
            fetchCategorie();

}


    },[isloding]);

    if (isloding) return <p>Loding...</p>;
    if (!product) return <p>Not Found</p>;
    return (
        <div className="item_details">
            <div className="container">
                <div className="imgs_item">
                    <img id="show" src={product.images[0]} alt={product.title} />
                    <div className="big_img"></div>
                    <div className="sm_img">
                        {product.images.map((img, index) => {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    alt={product.title}
                                    onClick={()=>{
                                        document.getElementById('show').src = img
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
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
                            Hurry Up! Only {product.stock} products left in
                            stock.
                        </span>
                    </h5>
                    <button className="btn">
                        Add to cart <TiShoppingCart />
                    </button>
                    <div className="icons">
                        <span>
                            <FaRegHeart />
                        </span>
                        <span>
                            <FaShare />
                        </span>
                    </div>
                </div>
            </div>

            {islodingCat ? (
                <p>Loading...</p>
            ) : (
                <SlideProudects
                    key={product.category}
                    data={category.products}
                    title={`${product.category.replace("-"," ")} products`}
                />
                
            )}
        </div>
    );
}

export default ProductDetails;
