import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Footer from './components/Footer';


// import Services from './components/pages/Services';
// import Products from './components/pages/Products';


import SignUp from './components/pages/SignUp';
import Exhibition from './components/pages/Exhibition';
import Profile from './components/pages/Profile';
import Itemdetail from './components/Itemdetail';
import Blogdetail from './components/Blogdetail';

import ItemBuy from './components/ItemBuy';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/exhibition' element={<Exhibition />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/item_detail' element={<Itemdetail />} />
          <Route path='/blog_detail' element={<Blogdetail />} />
          <Route path='/itembuy' element={<ItemBuy />} />
          <Route path='/main-cart-section' element={<Cart />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;