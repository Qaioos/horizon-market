import React from 'react'
import { StrictMode } from 'react'
/* import { createRoot } from 'react-dom/client' */
import './index.css'
import  ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Components/Contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
    <CartProvider>
      <App />
    </CartProvider>
    </BrowserRouter> 
  </StrictMode>,
)
