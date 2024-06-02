import React, { useState } from 'react';
import './Register.css';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const { confirmPassword, ...formData } = form;
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Registration successful');
       window.location.href='/';
      } else {
        alert(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" value={form.firstname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" value={form.lastname} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
