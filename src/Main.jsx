import React, { useState } from 'react';
import './Main.css';
import RacingGame from './pages/RacingGame';
import CardGame from './pages/CardGame';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);

  const openLoginPopup = () => setLoginPopupOpen(true);
  const closeLoginPopup = () => setLoginPopupOpen(false);

  const openInfoPopup = () => setInfoPopupOpen(true);
  const closeInfoPopup = () => setInfoPopupOpen(false);

  return (
    <HashRouter>
      <div className="app">
        <header>
          <logo>
            <h1>KU 미니게임</h1>
          </logo>
          <nav>
            <ul>
              <li onClick={openLoginPopup}>로그인</li>
              <li onClick={openInfoPopup}>정보 보기</li>
            </ul>
          </nav>
        </header>

        <main>
          <Thumbnail title="레이싱 게임" to="/racinggame"/>
          <Thumbnail title="카드 게임" to="/cardgame"/>

          <Routes>
            <Route path="/racinggame" element={<RacingGame />} />
            <Route path="/cardgame" element={<CardGame />} />
            <Route path="/*" element={'Not Found'}/>
          </Routes>
        </main>

        {isLoginPopupOpen && <LoginPopup onClose={closeLoginPopup} />}

        {isInfoPopupOpen && <InfoPopup onClose={closeInfoPopup} />}

        <footer>
          <p>&copy; 2024 KU 미니게임. All rights reserved.</p>
        </footer>
      </div>
    </HashRouter>
  );
};
const Thumbnail = ({ title,to }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <div
        className={`thumbnail ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span>{title}</span>
      </div>
    </Link>
  );
};

const LoginPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <p>로그인</p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

const InfoPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <p>CONA 2024 winter project</p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};


export default App;
