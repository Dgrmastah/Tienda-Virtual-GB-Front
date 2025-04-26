import React, { useState, useEffect } from 'react';
import axios from "axios";
import Product from "../components/Product";
import './HomePage.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/products`)  // Usa la variable de entorno
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al traer los productos:', error);
            });
    }, []);

    return (
        <div className="home-container">
            <h1 className="title">Tienda Online GB</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
