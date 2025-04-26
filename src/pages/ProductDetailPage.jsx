import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useAuth } from "../context/authContext";
import { toast } from "react-toastify";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const { user } = useAuth();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'; 
                const res = await fetch(`${API_URL}/api/products/${id}`);
                if (!res.ok) {
                    throw new Error('No se pudo cargar el producto');
                }
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error("Error al cargar el producto:", error);
                toast.error('Error al cargar el producto');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (!user) {
            toast.error("Debes iniciar sesión para comprar");
            return;
        }
        addToCart(product);
        toast.success("Producto agregado al carrito!");
    };

    const handleBackToHome = () => {
        navigate("/");
    };

    if (loading) return <p>Cargando...</p>;
    if (!product) return <p>No se encontró el producto...</p>;

    return (
        <div className="product-detail-container">
            <h2>{product.name}</h2>
            <img
                src={product.image}
                alt={product.name}
            />
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <div className="button-container">
                <button onClick={handleAddToCart}>Agregar al carrito</button>
                <button onClick={handleBackToHome}>Volver</button>
            </div>
        </div>
    );
};

export default ProductDetailPage;
