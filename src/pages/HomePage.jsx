import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
    
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
        const response = await axios.get(`${API_URL}/api/products`);
        setProducts(response.data);
      } catch (err) {
        setError('Hubo un error al traer los productos.'); 
        console.error('Error al traer los productos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">Tienda Online GB</h1>
      {loading && <p>Cargando productos...</p>} 
      {error && <p className="error-message">{error}</p>} 

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <Product product={product} />
            </div>
          ))
        ) : (
          <p>No hay productos disponibles</p> 
        )}
      </div>
    </div>
  );
};

export default HomePage;
