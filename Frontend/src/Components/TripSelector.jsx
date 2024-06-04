import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TripSelector.css';

const TripSelector = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [days, setDays] = useState(1);
  const navigate = useNavigate();

  const handleTripSelection = () => {
    navigate('/register', { state: { adults, children, days } });
  };

  return (
    <div className="trip-selector">
      <h2>Plan Your Trip</h2>
      <div className="selector-group">
        <label>Adults:</label>
        <input
          type="number"
          min="1"
          value={adults}
          onChange={(e) => setAdults(parseInt(e.target.value))}
        />
      </div>
      <div className="selector-group">
        <label>Children:</label>
        <input
          type="number"
          min="0"
          value={children}
          onChange={(e) => setChildren(parseInt(e.target.value))}
        />
      </div>
      <div className="selector-group">
        <label>Days:</label>
        <input
          type="number"
          min="1"
          value={days}
          onChange={(e) => setDays(parseInt(e.target.value))}
        />
      </div>
      <button className="trip-selector-btn" onClick={handleTripSelection}>
        Book Now
      </button>
    </div>
  );
};

export default TripSelector;
