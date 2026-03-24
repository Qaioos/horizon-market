import { Route, Routes } from "react-router-dom";
import Btmheader from "./Components/header/BtmHeader";
import TopHeader from "./Components/header/TopHeader";
import Home from "./Page/home/Home";
import ProductDetails from "./Page/Products/ProductsDetails";
import Cart from "./Page/cart/Cart";
// React hot Toast
import { Toaster } from "react-hot-toast";
import Scroll from "./Components/Scroll";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./Page/CategoryPage/CategoryPage";
import Favorites from "./Page/Favorites/Favorites";
import SerachResult from "./Page/SerachPage/SerachResult";

function App() {
    return (
        <>
            <header>
                <TopHeader />
                <Btmheader />
            </header>

            <Toaster
                position="bottom-right"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        background: "#e9e9e9",
                        borderRadius: "5px",
                        padding: "14px",
                    },
                }}
            />

            <Scroll />


            <AnimatePresence mode="wait">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/search" element={<SerachResult />} />


            </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
