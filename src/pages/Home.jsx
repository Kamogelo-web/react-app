import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Home() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Organize Your Life with Event Planner</h1>
        <p>Keep track of all your important events in one place</p>
        {!isAuthenticated ? (
          <div className="auth-buttons">
            <Link to="/register" className="btn btn-primary">Get Started</Link>
            <Link to="/login" className="btn btn-secondary">Login</Link>
          </div>
        ) : (
          <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
        )}
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>Easy Scheduling</h3>
          <p>Quickly add events with all the details you need</p>
        </div>
        <div className="feature-card">
          <h3>Never Forget</h3>
          <p>View all your upcoming events in one place</p>
        </div>
        <div className="feature-card">
          <h3>Access Anywhere</h3>
          <p>Works on all your devices</p>
        </div>
      </section>
    </div>
  );
}

export default Home;