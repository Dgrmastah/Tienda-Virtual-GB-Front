import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navBar';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
