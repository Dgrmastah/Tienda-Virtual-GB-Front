import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './RegisterPage.css';


const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await res.json();
            if (!res.ok) {
                toast.error(data.message || 'Error al registrar');
                return;
            }
            toast.success('Registro exitoso! Ya puedes iniciar sesión.');
            navigate('/login');
        } catch (err) {
            console.error('Error de red o del servidor:', err);
            toast.error('Error al conectar con el servidor');
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Crear cuenta</h2>
            <form onSubmit={handleRegister} className="register-form">
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
                    <label className="form-label">Email:</label>
                    <input
                        className="form-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="register-button">Registrarse</button>
            </form>
        </div>
    );
};

export default RegisterPage;
