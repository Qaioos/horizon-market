import React, { useState } from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SerachBox() {
    const [search, setserach] = useState("");
    const [suggestons, setsuggestons] = useState([]);
    const location = useLocation()

    useEffect(() => {
        const featchsuggestons = async () => {
            if (!search.length) {
                setsuggestons([]);
                return;
            }
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${search}`,
                );
                const data = await res.json();
                setsuggestons(data.products.slice(0, 4) || []);
            } catch (error) {
                console.log(error);
                setsuggestons([]);
            }
        };
        featchsuggestons();
    }, [search]);
    useEffect(() =>  {
        setsuggestons([])
    },[location])
    
    const navigate = useNavigate();
    const handelSubmit = (e) => {
        setsuggestons([]);
        e.preventDefault();
        if (search.trim()) {
            navigate(`/search?query=${encodeURIComponent(search.trim())}`);
        }
    };
    return (
        <div className="serachBox_Container">
            <form onSubmit={handelSubmit} className="search_box">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="search for products"
                    autoComplete="off"
                    onChange={(e) => setserach(e.target.value)}
                />
                <button type="submit">
                    <FaSearch />
                </button>
            </form>
            {suggestons.length > 1 && (
                <ul className="suggestions">
                    {suggestons.map((item) => (
                        <Link to={`/products/${item.id}`}>
                            <li key={item.id}>
                                {" "}
                                <img src={item.images[0]} alt="" />{" "}
                                <span>{item.title}</span>{" "}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SerachBox;
