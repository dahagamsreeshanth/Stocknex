import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Landing_Page/home/HomePage';
import AboutPage from './Landing_Page/about/AboutPage';
import PricingPage from './Landing_Page/pricing/PricingPage';
import SupportPage from './Landing_Page/support/SupportPage';
import ProductsPage from './Landing_Page/products/ProductsPage';
import Signup from './Landing_Page/signup/Signup';
import NotFound from './Landing_Page/NotFound';
import {BrowserRouter,Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/about" element={<AboutPage/>}></Route>
  <Route path="/pricing" element={<PricingPage/>}></Route>
  <Route path="/support" element={<SupportPage/>}></Route>
  <Route path="/products" element={<ProductsPage/>}></Route>
   <Route path="*" element={<NotFound/>}></Route>
  </Routes>
  
    </BrowserRouter>
    
  </React.StrictMode>
);

 