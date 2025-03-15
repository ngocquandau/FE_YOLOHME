import React, { useState } from 'react';
import './css/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ setIsLoggedIn }) => {
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  // Xử lý khi bấm nút LOGIN
  const handleLoginClick = () => {
    setShowRoleModal(true);
  };

  // Xử lý khi chọn vai trò (Admin hoặc Member)
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowRoleModal(false);
    setShowLoginModal(true);
  };

  // Đóng modal đăng nhập
  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    setSelectedRole('');
  };

  // Xử lý khi bấm nút Continue (kiểm tra đăng nhập)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Kiểm tra tài khoản admin
    if (email === 'admin@gmail.com' && password === 'admin') {
      setIsLoggedIn(true);
      navigate('/start');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span role="img" aria-label="house">🏠</span> YOLO Home
        </div>
        <nav className="nav">
          <a href="#news">News</a>
          <a href="#about">About</a>
          <a href="#help">Help</a>
          <button className="login-btn" onClick={handleLoginClick}>
            LOGIN
          </button>
        </nav>
      </header>

      {/* Hero Section với ảnh nền */}
      <section className="hero">
        <div className="hero-background" />
      </section>

      {/* Modal chọn vai trò */}
      {showRoleModal && (
        <div className="modal-overlay">
          <div className="role-modal">
            <h2>Login as:</h2>
            <button onClick={() => handleRoleSelect('Admin')}>Admin</button>
            <button onClick={() => handleRoleSelect('Member')}>Member</button>
            <button onClick={() => setShowRoleModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Modal đăng nhập */}
      {showLoginModal && (
        <div className="modal-overlay">
          <div className="login-modal">
            <h2>Login your account!</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="input-group">
                <label>
                  <input
                    type="radio"
                    name="loginType"
                    value="email"
                    defaultChecked
                  />
                  E-mail
                </label>
                <label>
                  <input type="radio" name="loginType" value="mobile" />
                  Mobile Number
                </label>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <a href="#forgot-password" className="forgot-password">
                Forgot password?
              </a>
              <button type="submit" className="continue-btn">
                Continue
              </button>
            </form>
            <button
              className="close-btn"
              onClick={handleCloseLoginModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>Let's Get Social</h3>
          <div className="social-links">
            <a href="#facebook">📘</a>
            <a href="#instagram">📸</a>
            <a href="#linkedin">🔗</a>
            <a href="#pinterest">📌</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>About YOLO Home</h3>
          <a href="#company">Company Information</a>
          <a href="#resources">Resources</a>
          <a href="#success">Our Success</a>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <a href="#contact">Contact Us</a>
          <a href="#newsletter">Newsletter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;