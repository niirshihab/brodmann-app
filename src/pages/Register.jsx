import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Registering with ${email}`);
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
          <label htmlFor="username">Choose a username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Choose a username"
          />
          <label htmlFor="password">Create a password</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Create a password"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>
          </div>
          <label htmlFor="confirm-password">Confirm your password</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm your password"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>
          </div>
          <button type="submit">Get started</button>
        </form>
        <p>Already have an account? <Link to="/">Sign in here</Link></p>
      </div>
    </div>
  );
};

export default Register;