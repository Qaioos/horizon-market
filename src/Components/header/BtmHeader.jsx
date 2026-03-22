import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//React Icons
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import "../../css/header.css";
// The Nav Links Mabing
const NavLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessoriies", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
];

export default function Btmheader() {
    const location = useLocation();
    const [categories, setcategories] = useState([]);
    const [isOpen, setisOpen] = useState(false);

    //close the Category_btn
    useEffect(() => {
        setisOpen(false);
    }, [location]);

    useEffect(() => {
        fetch("https://dummyjson.com/products/categories")
            .then((res) => res.json()) // the res is Array has a 24 Obj
            .then((data) => setcategories(data));
    }, []);

    return (
        <div className="btm_header">
            <div className="container">
                <nav className="nav">
                    <div className="category_nav">
                        <div
                            className="category_btn"
                            onClick={() => setisOpen(!isOpen)}
                        >
                            <p>
                                <IoMenu />
                                Browse Catgory
                                
                            </p>
                        </div>

                        <div
                            className={`category_nav_list ${isOpen ? "active" : ""}`}
                        >
                            {categories.map((cat) => {
                                return (
                                    <Link key={cat.slug} to={`category/${cat.slug}`}>
                                        {" "}
                                        {cat.name}{" "}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="nav_links">
                        {NavLinks.map((el) => {
                            return (
                                <li
                                    key={el.link}
                                    className={
                                        location.pathname === el.link
                                            ? "active"
                                            : ""
                                    }
                                >
                                    <Link to={el.link}>{el.title}</Link>
                                </li>
                            );
                        })}
                    </div>
                </nav>
                <div className="sign_regs_icon">
                    <Link to="/">
                        <PiSignInBold />
                    </Link>
                    <Link to="/">
                        <FaUserPlus />
                    </Link>
                </div>
            </div>
        </div>
    );
}
