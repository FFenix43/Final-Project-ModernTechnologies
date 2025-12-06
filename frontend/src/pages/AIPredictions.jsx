import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AIPredictions.css';

const AIPredictions = () => {
  const navigate = useNavigate();
  const [predictions, setPredictions] = React.useState(null);
  const [error, setError] = React.useState('');
  const API_BASE = process.env.REACT_APP_API_URL || '';

  React.useEffect(() => {
    fetch(`${API_BASE}/api/ai-predictions`)
      .then(res => res.json())
      .then(data => {
        if (data && data.summary) {
          setPredictions(data);
        } else {
          setError('Failed to load predictions');
        }
      })
      .catch(() => setError('Connection error'));
  }, []);

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
      {error && <p className="error">{error}</p>}
      {!predictions ? (
        <p>Loading predictions...</p>
      ) : (
        <div className="ai-results">
          <div className="summary-cards">
            <div className="summary-card leaving">
              <h3>{predictions.summary.leaving}</h3>
              <p>Leaving</p>
            </div>
            <div className="summary-card indecisive">
              <h3>{predictions.summary.indecisive}</h3>
              <p>Indecisive</p>
            </div>
            <div className="summary-card staying">
              <h3>{predictions.summary.staying}</h3>
              <p>Staying</p>
            </div>
          </div>

          <div className="predictions-section">
            <h2>🚪 Leaving ({predictions.leaving.length})</h2>
            {predictions.leaving.length > 0 ? (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>AI Score</th>
                      <th>Risk Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    {predictions.leaving.map(c => (
                      <tr key={c.customer_id}>
                        <td>{c.customer_id}</td>
                        <td>{c.name}</td>
                        <td><strong>{c.ai_score}</strong></td>
                        <td><span className={`label label-${c.risk_label}`}>{c.risk_label}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="no-data">No customers in this category</p>
            )}
          </div>

          <div className="predictions-section">
            <h2>🤔 Indecisive ({predictions.indecisive.length})</h2>
            {predictions.indecisive.length > 0 ? (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>AI Score</th>
                      <th>Risk Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    {predictions.indecisive.map(c => (
                      <tr key={c.customer_id}>
                        <td>{c.customer_id}</td>
                        <td>{c.name}</td>
                        <td><strong>{c.ai_score}</strong></td>
                        <td><span className={`label label-${c.risk_label}`}>{c.risk_label}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="no-data">No customers in this category</p>
            )}
          </div>

          <div className="predictions-section">
            <h2>✅ Staying ({predictions.staying.length})</h2>
            {predictions.staying.length > 0 ? (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>AI Score</th>
                      <th>Risk Label</th>
                    </tr>
                  </thead>
                  <tbody>
                    {predictions.staying.slice(0, 10).map(c => (
                      <tr key={c.customer_id}>
                        <td>{c.customer_id}</td>
                        <td>{c.name}</td>
                        <td><strong>{c.ai_score}</strong></td>
                        <td><span className={`label label-${c.risk_label}`}>{c.risk_label}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {predictions.staying.length > 10 && (
                  <p className="more-data">Showing 10 of {predictions.staying.length} customers</p>
                )}
              </div>
            ) : (
              <p className="no-data">No customers in this category</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIPredictions;
