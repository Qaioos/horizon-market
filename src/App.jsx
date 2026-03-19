import { Route, Routes } from "react-router-dom";
import Btmheader from "./Components/header/BtmHeader";
import TopHeader from "./Components/header/TopHeader";
import Home from "./Page/home/Home";
import ProductDetails from "./Page/Products/ProductsDetails";
import Cart from "./Page/cart/Cart";
// React hot Toast
import { Toaster } from "react-hot-toast";
import Scroll from "./Components/Scroll";

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

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
