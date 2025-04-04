import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import Home from './pages/Home';
import Contact from './components/Contact';
import About from './components/About';
import { Toaster } from "react-hot-toast";
import CartData from './pages/CartData';
import Beverages from './prodcutCategory/Beverages';
import NaturalSweeteners from './prodcutCategory/NaturalSweeteners';
import Product from './components/Product';
import CustomNavbar from './components/CustomNavbar';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import AuthModal from './auth/AuthModal';
import ProductDisplay from './pages/ProductDisplay';
import Superfoods from './prodcutCategory/Superfoods';
import Fruits from './prodcutCategory/Fruits';
import Oils from './prodcutCategory/Oils';
import GrainsRice from './prodcutCategory/GrainsRice';
import NutsDryFruits from './prodcutCategory/NutsDryFruits';
import PersonalCare from './prodcutCategory/PersonalCare';
import SpreadsButters from './prodcutCategory/SpreadsButters';
import ProductSearch from './pages/ProductSearch';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import { AnimatePresence } from 'framer-motion';

const AppContent = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();

  const openLoginModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);

  return (
    <>
      <CustomNavbar onLoginClick={openLoginModal} />
      {showAuthModal && <AuthModal onClose={closeAuthModal} />}
      <Toaster />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/cartdata' element={<CartData />} />
            <Route path='/shop' element={<Product />} />
            <Route path='/productdisplay/:id' element={<ProductDisplay />} />
            <Route path='/productsearch' element={<ProductSearch />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/category/beverages' element={<Beverages />} />
            <Route path='/category/superfoods' element={<Superfoods />} />
            <Route path='/category/grainsrice' element={<GrainsRice />} />
            <Route path='/category/nutsdryfruits' element={<NutsDryFruits />} />
            <Route path='/category/personalcare' element={<PersonalCare />} />
            <Route path='/category/spreadsbutters' element={<SpreadsButters />} />
            <Route path='/category/fruits' element={<Fruits />} />
            <Route path='/category/oils' element={<Oils />} />
            <Route path='/category/naturalsweeteners' element={<NaturalSweeteners />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
