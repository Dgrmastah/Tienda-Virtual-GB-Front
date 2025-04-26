import React from "react";
import { useCart } from "../context/cartContext"; 
import { Link } from "react-router-dom";

const CarPage = () => {
    const { cartItems, removeFromCart } = useCart();
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + Number(item.price), 0);
    };

    return(
        <>
        <div>
            <h1>Carrito de compras</h1>
            {cartItems.length === 0 ? (
                <p>Todabia no cargaste ningun articulo</p>
            ) : (
                <>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index} style={styles.listItem}>
                            <strong>{item.name}</strong> - ${item.price}
                            <button onClick={() => removeFromCart(item)} style={styles.removeButton}>Borrar del carrito</button>
                        </li>
                    ))}
                </ul>
                <hr/>
                <h2>Total: ${calculateTotal().toFixed(2)}</h2>
                <div style={styles.buttons}>
                    <Link to="/" style={styles.button}>Seguir comprando</Link>
                    <Link to="/terminar-compra" style={{...styles.button, backgroundColor: "#4CAF50"}}>Finalizar compra</Link>
                </div>
                </>
            )}
        </div>
        </>
    );
};

const styles = {
    listItem: {
        marginBottom: "1rem", 
        justifyContent: "space-between",
        alignItems: "center",
    },
    removeButton: {
        padding: "0.3rem 0.6rem", 
        backgroundColor: "#e74c3c",  
        color: "#fff",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
    removeButtonHover: {
        backgroundColor: "#c0392b",  
    },
    buttons: {
        display: "flex",
        gap: "1rem",
        marginTop: "1rem",
    },
    button: {
        padding: "0.5rem 1rem",
        backgroundColor: "#333",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "5px",
        textAlign: "center",
        cursor: "pointer",
        display: "inline-block",
    }
};

export default CarPage;
