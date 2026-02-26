import { useState } from 'react';
import './Auth.css';

export default function Register({ navigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === formData.email)) {
      alert('Email already registered');
      return;
    }
    
    users.push({
      name: formData.name,
      email: formData.email,
      password: formData.password
    });
    
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Create Account</h1>
        <p className="auth-subtitle">Register to get started</p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
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
          
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          
          <button type="submit">Register</button>
        </form>
        
        <p className="auth-link">
          Already have an account? 
          <a href="/login" onClick={(e) => { e.preventDefault(); navigate('/login'); }}> Login</a>
        </p>
      </div>
    </div>
  );
}
