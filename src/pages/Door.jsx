import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Door.css';

const Door = ({ setIsLoggedIn, isDoorOn, setIsDoorOn }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Xử lý đăng xuất
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  // Xử lý nhập mật mã
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  // Xử lý mở cửa
  const handleOpenDoor = () => {
    if (password === '112233') {
      setIsDoorOn(true); // Cập nhật trạng thái cửa thành "Mở"
      setError('');
      alert('Cửa đã được mở!');
    } else {
      setError('Mật mã không đúng!');
    }
  };

  // Dữ liệu lịch sử (tạm thời, sau này lấy từ backend)
  const historyData = [
    { name: 'Đậu Ngọc Quân', id: '#000001', method: 'Nhập mật mã', date: '28 Jan, 12:30 AM', status: 'Thành công', image: 'https://via.placeholder.com/100' },
    { name: 'Nguyen Van A', id: '#000002', method: 'Face AI', date: '28 Jan, 12:30 AM', status: 'Thất bại', image: 'https://via.placeholder.com/100' },
    { name: 'Nguyen Van B', id: '#000003', method: 'Nhập mật mã', date: '28 Jan, 12:30 AM', status: 'Thất bại', image: 'https://via.placeholder.com/100' },
    { name: 'Nguyen Van C', id: '#000004', method: 'Face AI', date: '28 Jan, 12:30 AM', status: 'Thành công', image: 'https://via.placeholder.com/100' },
  ];

  // Hiển thị modal ảnh
  const handleViewImage = (image) => {
    setSelectedImage(image);
    setShowImageModal(true);
  };

  // Đóng modal ảnh
  const closeImageModal = () => {
    setShowImageModal(false);
    setSelectedImage(null);
  };

  // Xử lý Face AI (bổ sung sau)
  const handleFaceAI = () => {
    alert('Chức năng Face AI: Yêu cầu chụp ảnh từ thiết bị (chưa triển khai).');
    // Sau này có thể dùng navigator.mediaDevices.getUserMedia để chụp ảnh
  };

  return (
    <div className="door-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="user-info">
          <img src="/img/logo_admin.png" alt="User Avatar" className="avatar" />
          <span className="username">Long</span>
        </div>
        <nav className="sidebar-nav">
          <Link to="/start">
            <span role="img" aria-label="home">🏠</span> Home
          </Link>
          <Link to="/smart-door" className="active">
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
          <h1>Smart Door Control</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search for something" />
          </div>
          <div className="header-icons">
            <span role="img" aria-label="settings">⚙️</span>
            <span role="img" aria-label="notifications">🔔</span>
          </div>
        </header>

        <section className="door-control-section">
          {/* Door Control Form */}
          <div className="door-control-form">
            <div className="door-status">
              <span>{isDoorOn ? 'Mở cửa' : 'Đóng cửa'}</span>
              <span role="img" aria-label="door-status">{isDoorOn ? '🔓' : '🔒'}</span>
            </div>
            <div className="password-input">
              <label>Nhập mật mã</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="******"
              />
              {error && <span className="error">{error}</span>}
            </div>
            <button onClick={handleOpenDoor} className="open-door-btn">
              Mở cửa
            </button>
            <button onClick={handleFaceAI} className="face-ai-btn">
              Face AI
            </button>
          </div>

          {/* History Section */}
          <div className="history-section">
            <h2>Lịch sử mở cửa</h2>
            <div className="history-status">
              <span>Tắt</span>
            </div>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Nguời mở cửa</th>
                  <th>ID người mở</th>
                  <th>Kiểu</th>
                  <th>Date</th>
                  <th>Trạng thái</th>
                  <th>Xem lại</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.id}</td>
                    <td>{item.method}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td>
                      <span
                        role="img"
                        aria-label="view"
                        className="view-icon"
                        onClick={() => handleViewImage(item.image)}
                      >
                        📷
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button>Previous</button>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <button>Next</button>
            </div>
          </div>
        </section>
      </main>

      {/* Modal hiển thị ảnh */}
      {showImageModal && (
        <div className="modal-overlay">
          <div className="image-modal">
            <img src={selectedImage} alt="Person" className="modal-image" />
            <button className="close-modal-btn" onClick={closeImageModal}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Door;