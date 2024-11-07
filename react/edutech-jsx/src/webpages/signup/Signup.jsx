import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = formData.email.trim();
    const password = formData.password.trim();
    const confirmPassword = formData.confirmPassword.trim();

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    alert("Signed up successfully!!");

    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  useEffect(() => {
    // This effect runs once when the component mounts, similar to DOMContentLoaded
    console.log("Signup component mounted");
  }, []);

  return (
    <div className="container-fluid">
      <form className="mx-auto" onSubmit={handleSubmit}>
        <h4 className="text-center">Sign Up to </h4>
        <div className="edu-tech-wrapper">
          <i className="fas fa-graduation-cap symbol"></i> 
          <span className="edu">EDU</span><span className="tech">TECH</span>
        </div>
        
        <div className="mb-3 mt-5 input-icon">
          <label htmlFor="Email" className="form-label">Email</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <input 
              type="email" 
              className="form-control" 
              id="Email"
              name="email"
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 input-icon">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 input-icon">
          <label htmlFor="pwd" className="form-label">Confirm Password</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            <input 
              type="password" 
              className="form-control" 
              id="pwd"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="buttonw">Sign Up</button>
        
        <div className="text-center mt-3">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;