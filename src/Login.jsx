import { useState } from 'react';
import './Auth.css';

export default function Login({ navigate, onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === formData.email && u.password === formData.password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      onLogin();
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Welcome Back</h1>
        <p className="auth-subtitle">Login to your account</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          <button type="submit">Login</button>
        </form>
        
        <p className="auth-link">
          Don't have an account? 
          <a href="/register" onClick={(e) => { e.preventDefault(); navigate('/register'); }}> Register</a>
        </p>
      </div>
    </div>
  );
}
