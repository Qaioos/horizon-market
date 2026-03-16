import React, { useEffect } from "react";
import HeroSlider from "../Components/HeroSlider";

import "../css/home.css";
import SlideProudects from "../Components/slide/SlideProudects";

const Categories = [
    "smartphones",
    "laptops",
    "tablets",
    "sunglasses",
    "sports-accessories",
];

function Home() {
    const [products, setProducts] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const  results = await Promise.all(
                    Categories.map(async(cate)=>{
                        const response = await fetch(`https://dummyjson.com/products/category/${cate}`);
                        const data = await response.json();
                        return {[cate]: data.products}
                    })
                )
                const productsData = Object.assign({},...results)

                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false)
            }
        };
        fetchProducts();
    }, []);


    return (
        <>
            <HeroSlider />

            {loading ? (<p>Loading...</p>) : (
                Categories.map((cate) => {
                    return <SlideProudects key={cate} data={products[cate]} title={`${cate} products`} />
                })
            )}
        </>
    );
}

export default Home;
