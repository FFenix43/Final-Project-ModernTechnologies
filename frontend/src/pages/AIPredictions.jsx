import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AIPredictions.css';

const AIPredictions = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
    window.location.reload();
  };

  return (
    <div className="ai-predictions-container">
      <div className="ai-header">
        <h1>AI Predictions 🤖</h1>
        <div className="header-buttons">
          <button onClick={() => navigate('/dashboard')} className="dashboard-btn">
            Back to Dashboard
          </button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default AIPredictions;
