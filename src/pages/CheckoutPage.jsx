import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Compra realizada con éxito!");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" placeholder="Nombre completo" required style={styles.input} />
        <input type="email" placeholder="Correo electrónico" required style={styles.input} />
        <input type="text" placeholder="Dirección de envío" required style={styles.input} />
        <button type="submit" style={styles.button}>Pagar</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "0.7rem",
    fontSize: "1rem",
    borderRadius: "5px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  }
};

export default CheckoutForm;
