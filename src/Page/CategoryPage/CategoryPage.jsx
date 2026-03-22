import React, { useEffect, useState } from "react";
import SlideProudects from "../../Components/slide/SlideProudects";
import { useParams } from "react-router-dom";
import LoadingSlide from "../../Components/loading/LoadingSlide";
import PageTransition from "../../Components/PageTransition";

function CategoryPage() {
    const { category } = useParams();
    const [categories, setcatecory] = useState(null);
    const [isloding, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategorie = async () => {
            try {
                const result = await fetch(
                    `https://dummyjson.com/products/category/${category}`,
                );
                const data = await result.json();
                setcatecory(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCategorie();
    },[category]);

    return (
        <PageTransition>
            <div className="container">

            <div>
                {isloding ? (
                    <LoadingSlide />
                ) : (
                    <PageTransition>
                        <SlideProudects
                            key={categories}
                            data={categories.products}
                            title={`${category.replace("-", " ")} : ${categories.limit} products`}
                        />
                    </PageTransition>
                )}
            </div>
            </div>

        </PageTransition>
    );
}

export default CategoryPage;
