import React from "react";
import { useCart } from "../context/cartContext"; 
import { toast } from "react-toastify";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { addToCart } = useCart(); 
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = (e) => {
        e.stopPropagation();  
        if (!user) {
            toast.error('¡Debes iniciar sesión para comprar!');
            return;
        }
        addToCart(product);
        toast.success("Producto agregado al carrito!");
    };

    const handleClick = () => {
        navigate(`/producto/${product._id}`); 
    };

    return (    
        <div onClick={handleClick} className="product-card-inner">
            <img src={product.image} alt={product.name} width="150"/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default Product;
