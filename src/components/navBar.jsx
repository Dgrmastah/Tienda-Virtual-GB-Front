import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logoLink}>
        <h2 style={styles.logo}>GB Store</h2>
      </Link>
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Inicio</Link></li>
        {!user && <li><Link to="/login" style={styles.link}>Log In</Link></li>}
        <li><Link to="/carrito" style={styles.link}>Carrito</Link></li>
        {user && (
          <li>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Cerrar sesión
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: 'rgba(51, 51, 51, 0.8)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  logoLink: {
    textDecoration: 'none', 
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    color: '#fff', 
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  link: {
    color: '#fff', 
    textDecoration: 'none', 
    fontSize: '1rem',
    position: 'relative',
    transition: 'color 0.3s',
  },
  logoutButton: {
    background: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'color 0.3s',
  }
};

export default NavBar;
