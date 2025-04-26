import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { toast } from 'react-toastify';
import './LoginPage.css';


const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || 'Error al iniciar sesión');
        return;
      }

      const userData = { username };
      login(data.token, userData);
      toast.success('Inicio de sesión exitoso');
      navigate('/');
    } catch (err) {
      console.error('Error de red o del servidor:', err);
      toast.error('Error al conectar con el servidor');
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label className="form-label">Usuario:</label>
          <input
            className="form-input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Contraseña:</label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">Ingresar</button>
        <div className="register-link">
          <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
