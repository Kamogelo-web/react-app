import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AddEvent from './pages/AddEvent';
import Help from './pages/Help';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <EventProvider>
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/add-event" element={
                <PrivateRoute>
                  <AddEvent />
                </PrivateRoute>
              } />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </EventProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;