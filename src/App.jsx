import { Route, Routes } from "react-router-dom";
import Btmheader from "./Components/header/BtmHeader";
import TopHeader from "./Components/header/TopHeader";
import Home from "./Page/Home";
import  ProductDetails from "./Page/ProductsDetails";


function App() {
    return(
      <>
      <header>
        <TopHeader/>
        <Btmheader/>
      </header>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
    </>
    )
}

export default App;
