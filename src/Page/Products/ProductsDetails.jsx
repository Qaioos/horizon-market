import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import "../../Page/Products/productdetails.css";
import SlideProudects from "../../Components/slide/SlideProudects";

import LodingDetails from "../../Components/loading/LoadingDetails";
import LoadingSlide from "../../Components/loading/LoadingSlide";
import ProductsImgs from "./ProductsImgs";
import ProductInfo from "./ProductInfo";
import PageTransition from "../../Components/PageTransition";

function ProductDetails() {
    const { id } = useParams();
    const [product, setproduct] = useState(null);
    const [isloding, setLoading] = useState(true);

    const [category, setcatecory] = useState(null);
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
                    const results = await fetch(
                        `https://dummyjson.com/products/category/${product.category}`,
                    );
                    const data = await results.json();
                    setcatecory(data);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoadingCat(false);
                }
            };

            fetchCategorie();
        }
    }, [product?.category]);

    if(!product){
        <p>Not Found </p>
    }

    return (
        <PageTransition key={id}>

        <div>
            {isloding ? (
                <>
                    <LodingDetails />
                    <LoadingSlide />
                </>
            ) : (
                <div className="item_details">
                    <div className="container">
                        <ProductsImgs product={product} />
                        <ProductInfo product={product} />
                    </div>
                </div>
            )}

            {islodingCat ? (
                <p>Loading...</p>
            ) : (
                <SlideProudects
                    key={product.category}
                    data={category.products}
                    title={`${product.category.replace("-", " ")} products`}
                />
            )}
        </div>
        </PageTransition>

    );
}

export default ProductDetails;
