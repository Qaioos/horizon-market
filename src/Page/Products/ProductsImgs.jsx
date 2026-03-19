import React from "react";

function ProductsImgs({ product }) {
    return (
        <div className="imgs_item">
            <img id="show" src={product.images[0]} alt={product.title} />
            <div className="big_img"></div>
            <div className="sm_img">
                {product.images.map((img, index) => {
                    return (
                        <div key={index} className="img_div_sm">
                            <img
                                src={img}
                                alt={product.title}
                                onClick={() => {
                                    document.getElementById("show").src = img;
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductsImgs;
