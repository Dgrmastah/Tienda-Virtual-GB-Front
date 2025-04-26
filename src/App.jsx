import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LogInPage';
import CarPage from './pages/CartPage';
import Layout from './components/Layout';
import RegisterPage from './pages/RegisterPage';
import CheckoutForm from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="carrito" element={<CarPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="producto/:id" element={<ProductDetailPage />} />
          <Route path="terminar-compra" element={<CheckoutForm />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </Router>
  );
};

export default App;
