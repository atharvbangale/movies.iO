import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './Main';
import { Login } from './Componants/Login';
import { Register } from './Componants/Register';
import Front from './Componants/Front';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/main'); 
  };

  const handleRegister = () => {
    setIsLoggedIn(true); 
    navigate('/main'); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login'); 
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Front />} />
        <Route 
          path="/login" 
          element={<Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/register" 
          element={<Register onRegister={handleRegister} />} 
        />
        <Route 
          path="/main" 
          element={isLoggedIn ? (
            <Main onLogout={handleLogout} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
