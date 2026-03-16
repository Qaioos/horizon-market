import React from "react";

//React  Icons
import { FaStar, FaStarHalfAlt ,FaCartArrowDown ,FaShare, FaRegHeart} from "react-icons/fa";

function Proudects({item}) {
    console.log(item)
    return (
        <div className="product">
            <div className="img_product">
                <img src={item.images[0]} alt={item.images[0]}   />
            </div>

            <p className="name_product">{item.title}</p>

            <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </div>

            <p className="price"><span>{item.price}</span></p>

            <div className="icons">
                <span><FaCartArrowDown /></span>
                <span><FaRegHeart /></span>
                <span><FaShare /></span>
            </div>

        </div>
    );
}

export default Proudects;
