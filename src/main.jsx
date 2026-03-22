import React from "react";
import { StrictMode } from "react";
/* import { createRoot } from 'react-dom/client' */
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Components/Contexts/CartContext.jsx";
import  CreateFavoretProvider  from "./Components/Contexts/FavoretContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename="/">
            <CreateFavoretProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </CreateFavoretProvider>
        </BrowserRouter>
    </StrictMode>,
);
