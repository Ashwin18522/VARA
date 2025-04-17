import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Welcome Back </h2>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <div className="remember-row">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#" className="forgot">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="divider"><span>or</span></div>

        <button className="google-login">
          Sign in with Google
        </button>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
