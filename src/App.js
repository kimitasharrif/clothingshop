
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import LoginSgnup from './Pages/LoginSgnup';
import Footer from './components/Footer/Footer';


function App() {
 return (
    <BrowserRouter>
    <NavBar/>
      <div className="App">
        <Routes>
          <Route index element={<Shop/>} />
          <Route path="mens" element={<ShopCategory category="men" />} />
          <Route path="womens" element={<ShopCategory category="women" />} />
          <Route path="kids" element={<ShopCategory category="kid" />} />
          <Route path="product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="cart" element={<Cart/>} />
          <Route path="login" element={<LoginSgnup/>} />
          
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
