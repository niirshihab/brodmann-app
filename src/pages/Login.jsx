import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Logging in with ${email}`);
  };

  return (
    <div className="container">
      <div className="left-section">
        <img src="/assets/images/logo.svg" alt="Brodmann" className="logo" />
        <h1>Deliverable of the month</h1>
        <h2>Switch - Mother's Day Post</h2>
        <img className="deliverable" src="/assets/images/deliverable.jpg" alt="Deliverable" />
        <p>By: Talib Jafar</p>
      </div>
      <div className="right-section">
        <h2>Hello Brodmanner</h2>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address@brodmann10.com"
          />
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <Link to="/forget-password" className="back-link">Forgot Password?</Link>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;