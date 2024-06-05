import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import './Register.css';
Modal.setAppElement('#root');
const RegistrationForm = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
   
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      const { adults, children, days } = location.state;
    //   console.log("Trip Details:", adults, children, days);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    // Extract adults, children, and days from location state
    const { adults, children, days } = location.state;
  
    // Combine form data and trip details
    const formDataWithTrip = {
      ...form,
      adults,
      children,
      days,
    };

    try {
      const response = await fetch('https://kashmirtour.netlify.app/.netlify/functions/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithTrip), // Send combined form data with trip details
      });
  
      const result = await response.json();
      if (response.ok) {
        setModalIsOpen(true); // Show modal
        setTimeout(() => {
          navigate('/');
        }, 2000); // Navigate after 2000ms (2 seconds)
      } else {
        alert(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  
  

  const closeModal = () => {
    setModalIsOpen(false);
    navigate('/'); // Redirect to home page after closing the modal
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
        <button type="submit">Book Now</button>
      </form>

      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Registration Successful"
  style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
    
    },
    content: {
      position: 'relative',
      backgroundColor: 'white',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      maxWidth: '80%', // Adjust the width as needed
      maxHeight: '80%', // Adjust the height as needed
      overflowY: 'auto', // Enable vertical scrolling if content exceeds the height
     left: -5,
    }
  }}
>
  <div className="popup-content">
    <h2>Booking Successful</h2>
    <p>Thank you for booking. We will reach out to you shortly. You will be redirected to the home page.</p>
    <button onClick={closeModal}>Close</button>
  </div>
</Modal>

    </div>
  );
};

export default RegistrationForm;
