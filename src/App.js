import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Start from './pages/Start';
import Door from './pages/Door'; // Import Door component
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDoorOn, setIsDoorOn] = useState(false); // Trạng thái cửa

  return (
    <Router>
      <Routes>
        {/* Trang Home (trước khi đăng nhập) */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/start" />
            ) : (
              <Home setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        {/* Trang Start (sau khi đăng nhập) */}
        <Route
          path="/start"
          element={
            isLoggedIn ? (
              <Start setIsLoggedIn={setIsLoggedIn} isDoorOn={isDoorOn} setIsDoorOn={setIsDoorOn} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        {/* Trang Smart Door Control */}
        <Route
          path="/smart-door"
          element={
            isLoggedIn ? (
              <Door setIsLoggedIn={setIsLoggedIn} isDoorOn={isDoorOn} setIsDoorOn={setIsDoorOn} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;