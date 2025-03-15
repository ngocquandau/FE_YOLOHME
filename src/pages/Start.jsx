import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Start.css';

const Start = ({ setIsLoggedIn, isDoorOn, setIsDoorOn }) => {
  const navigate = useNavigate();

  // State để lưu trữ thông số (tạm thời, sau này lấy từ backend)
  const [temperature, setTemperature] = useState(24);
  const [humidity, setHumidity] = useState(18);
  const [light, setLight] = useState(20);
  const [dust, setDust] = useState(4.57);

  // Xử lý đăng xuất
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  // Xử lý chuyển đổi trạng thái cửa
  const toggleDoor = () => {
    setIsDoorOn(!isDoorOn);
  };

  return (
    <div className="start-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="user-info">
          <img src="/img/logo_admin.png" alt="User Avatar" className="avatar" />
          <span className="username">Admin</span>
        </div>
        <nav className="sidebar-nav">
          <Link to="/start" className="active">
            <span role="img" aria-label="home">🏠</span> Home
          </Link>
          <Link to="/smart-door">
            <span role="img" aria-label="door">🚪</span> Smart Door Control
          </Link>
          <Link to="#environment">
            <span role="img" aria-label="environment">🌍</span> Environment Monitor
          </Link>
          <Link to="#smart-voice">
            <span role="img" aria-label="voice">🎙️</span> Smart Voice
          </Link>
          <Link to="/" onClick={handleLogout}>
            <span role="img" aria-label="logout">🔓</span> Logout
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="main-header">
          <h1>Smart Voice Assistant</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search for something" />
          </div>
          <div className="header-icons">
            <span role="img" aria-label="settings">⚙️</span>
            <span role="img" aria-label="notifications">🔔</span>
          </div>
        </header>

        <section className="dashboard">
          {/* Environment Card */}
          <div className="env-card">
            <div className="env-item">
              <span>Nhiệt độ</span>
              <span>{temperature}°C</span>
            </div>
            <div className="env-item">
              <span>Độ ẩm</span>
              <span>{humidity}%</span>
            </div>
            <div className="env-item">
              <span>Ánh sáng</span>
              <span>{light}%</span>
            </div>
            <div className="env-item">
              <span>Bụi mịn</span>
              <span>{dust}</span>
            </div>
            <button className="start-session-btn">Start session</button>
          </div>

          {/* Smart Door Control */}
          <div className="door-control">
            <span>Smart Door</span>
            <label className="switch">
              <input type="checkbox" checked={isDoorOn} onChange={toggleDoor} />
              <span className="slider round"></span>
            </label>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Start;