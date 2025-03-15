import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu';
import './Start.css';

const Start = ({ setIsLoggedIn, isDoorOn, setIsDoorOn }) => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Cập nhật thời gian thực tế mỗi giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Xử lý khi click vào toggle Smart Door
  const handleDoorToggle = () => {
    if (isDoorOn) {
      // Nếu cửa đang mở, đóng cửa ngay lập tức
      setIsDoorOn(false);
    } else {
      // Nếu cửa đang đóng, chuyển hướng sang trang Smart Door để nhập mật khẩu
      navigate('/smart-door');
    }
  };

  return (
    <div className="start-container">
      <Menu setIsLoggedIn={setIsLoggedIn} />

      <main className="main-content">
        <header className="main-header">
          <h1>YOLO HOME</h1>
          <div className="search-bar">
            <input type="text" placeholder="Search for something" />
          </div>
          <div className="header-icons">
            <span role="img" aria-label="settings">⚙️</span>
            <span role="img" aria-label="notifications">🔔</span>
          </div>
        </header>

        <section className="dashboard">
          <div className="env-card">
            <div className="env-item">
              <span>Nhiệt độ</span>
              <span>24°C</span>
            </div>
            <div className="env-item">
              <span>Độ ẩm</span>
              <span>18%</span>
            </div>
            <div className="env-item">
              <span>Ánh sáng</span>
              <span>20%</span>
            </div>
            <div className="env-item">
              <span>Thời gian</span>
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>
          </div>

          <div className="door-control">
            <span>Smart Door</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isDoorOn}
                onChange={handleDoorToggle}
              />
              <span className="slider round"></span>
            </label>
            {/* <span>{isDoorOn ? 'Đang mở' : 'Đang đóng'}</span> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Start;