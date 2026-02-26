import { useState, useEffect } from 'react';
import Home from './Home';
import HealthWellness from './health';
import Dashboard from './Dashboard';
import Login from './Login';
import Register from './Register';

function App() {
  const [page, setPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setIsAuthenticated(true);
      const path = window.location.pathname;
      if (path === '/dashboard') setPage('dashboard');
      else if (path === '/wellness') setPage('wellness');
      else setPage('home');
    } else {
      const path = window.location.pathname;
      if (path === '/register') setPage('register');
      else setPage('login');
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setPage('home');
    window.history.pushState({}, '', '/');
  };

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    
    if (path === '/logout') {
      localStorage.removeItem('currentUser');
      setIsAuthenticated(false);
      setPage('login');
      window.history.pushState({}, '', '/login');
      return;
    }
    
    if (path === '/login') setPage('login');
    else if (path === '/register') setPage('register');
    else if (path === '/dashboard') setPage('dashboard');
    else if (path === '/wellness') setPage('wellness');
    else setPage('home');
  };

  if (!isAuthenticated) {
    return page === 'register' ? <Register navigate={navigate} /> : <Login navigate={navigate} onLogin={handleLogin} />;
  }

  if (page === 'dashboard') {
    return <Dashboard navigate={navigate} />;
  }

  if (page === 'wellness') {
    return <HealthWellness navigate={navigate} />;
  }

  return <Home navigate={navigate} />;
}

export default App
