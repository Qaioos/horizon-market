import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../../Components/PageTransition";
import SlideProudects from "../../Components/slide/SlideProudects";
import LoadingSlide from "../../Components/loading/LoadingSlide";
import Proudects from "../Products/Proudects";

function SerachResult() {
    const [result, setresult] = useState([]);
    const [loading, setlodaing] = useState(true);

    const query = new URLSearchParams(useLocation().search).get("query");

    useEffect(() => {
        const featchResults = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${query}`,
                );
                const data = await res.json();
                setresult(data.products || []);
                console.log(result);
            } catch (error) {
                console.log(error);
            } finally {
                setlodaing(false);
            }
        };
        console.log(result);
        if (query){
            featchResults();
        }
            
    }, [query]);

    return (
        <PageTransition key={query}>
            <div className="category_products">
                {loading  ? (
                    <LoadingSlide key={query}/>
                ) : result.length > 0 ? (
                    
                    <div className="container">
                        <div className="top_slide">
                            <h2>Results for :{query}</h2>
                        </div>
                        <div className="products" style={{display:"flex",flexWrap:"wrap"}}>
                            {result.map((item,index) => (
                                <Proudects item={item} key={index}/>
                            ))}
                        </div>
                    </div>
                
                ) : (<div className="container"><p>No Result Fund</p></div>)  }
            </div>
        </PageTransition>
    );
}

export default SerachResult;
