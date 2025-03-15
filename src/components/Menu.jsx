import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logoAdmin from '../img/logo_admin.jpg';

const Menu = ({ setIsLoggedIn }) => {
  // Xử lý đăng xuất
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <aside className="sidebar">
      <div className="user-info">
      <img src={logoAdmin} alt="User Avatar" className="avatar" />
        <span className="username">Admin</span>
      </div>
      <nav className="sidebar-nav">
        <Link to="/start" className={({ isActive }) => (isActive ? "active" : "")}>
          <span role="img" aria-label="home">🏠</span> Home
        </Link>
        <Link to="/smart-door" className={({ isActive }) => (isActive ? "active" : "")}>
          <span role="img" aria-label="door">🚪</span> Smart Door Control
        </Link>
        <Link to="#environment" className={({ isActive }) => (isActive ? "active" : "")}>
          <span role="img" aria-label="environment">🌍</span> Environment Monitor
        </Link>
        <Link to="#smart-voice" className={({ isActive }) => (isActive ? "active" : "")}>
          <span role="img" aria-label="voice">🎙️</span> Smart Voice
        </Link>
        <Link to="/" onClick={handleLogout} className={({ isActive }) => (isActive ? "active" : "")}>
          <span role="img" aria-label="logout">🔓</span> Logout
        </Link>
      </nav>
    </aside>
  );
};

export default Menu;