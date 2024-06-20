import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Reset link sent to ${email}`);
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
        <h2>Forget Password</h2>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <button type="submit">Submit</button>
        </form>
        <Link to="/" className="back-link">Back to login</Link>
      </div>
    </div>
  );
};

export default ForgetPassword;