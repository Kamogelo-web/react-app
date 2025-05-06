import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { FiCalendar, FiPlusCircle, FiHelpCircle, FiLogOut } from 'react-icons/fi';

function Header() {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="app-header">
      <div className="container">
        <Link to="/" className="logo">Event Planner</Link>
        
        <nav className="main-nav">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link">
                <FiCalendar /> Dashboard
              </Link>
              <Link to="/add-event" className="nav-link">
                <FiPlusCircle /> Add Event
              </Link>
              <Link to="/help" className="nav-link">
                <FiHelpCircle /> Help
              </Link>
              <div className="user-menu">
                <span>Hi, {user?.name || user?.username}</span>
                <button onClick={handleLogout} className="btn-logout">
                  <FiLogOut /> Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
              <Link to="/help" className="nav-link">Help</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;