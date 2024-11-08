import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  // Define correct credentials (in a real app, this would come from a backend)
  const correctUsername = "admin";
  const correctPassword = "password123";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const username = formData.username.trim();
    const password = formData.password.trim();

    // Check credentials
    if (username === correctUsername && password === correctPassword) {
      alert("Login successfully!");
      // Reset form
      setFormData({
        username: '',
        password: '',
        rememberMe: false
      });
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  };

  // Similar to DOMContentLoaded
  useEffect(() => {
    console.log('Login component mounted');
  }, []);

  return (
    <div className="container-fluid">
      <form className="mx-auto" onSubmit={handleSubmit}>
        <h4 className="text-center">Welcome Back to </h4>
        <div className="edu-tech-wrapper">
          <i className="fas fa-graduation-cap symbol"></i> 
          <span className="edu">EDU</span><span className="tech">TECH</span>
        </div>
        
        <div className="mb-3 mt-5 input-icon">
          <label htmlFor="username" className="form-label">User Name</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <input 
              type="text" 
              className="form-control" 
              id="username"
              name="username"
              placeholder="Enter your username" 
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 input-icon">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            <input 
              type="password" 
              className="form-control" 
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="gridCheck"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Remember me
          </label>
        </div>

        <button type="submit" className="buttonw">Login</button>
        
        <div className="text-center mt-3">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;