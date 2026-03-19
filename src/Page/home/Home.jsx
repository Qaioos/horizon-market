import React, { useEffect } from "react";
import HeroSlider from "../../Components/HeroSlider";

import "./home.css";
import SlideProudects from "../../Components/slide/SlideProudects";
import LoadingSlide from "../../Components/loading/LoadingSlide";

const Categories = [
    "smartphones",
    "mobile-accessories",
    "laptops",
    "tablets",
    "sunglasses",
    "sports-accessories",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "beauty",
    "womens-jewellery",
    "fragrances",
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

            {loading ? (<LoadingSlide/>) : (
                Categories.map((cate) => {
                    return <SlideProudects key={cate} data={products[cate]} title={`${cate.replace("-"," ")} products`} />
                })
            )}
        </>
    );
}

export default Home;

