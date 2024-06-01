import React from 'react';
import { useSwipeable } from 'react-swipeable';
import './Services.css';

const services = [
  { title: 'Service 1', description: 'Description of Service 1' },
  { title: 'Service 2', description: 'Description of Service 2' },
  { title: 'Service 3', description: 'Description of Service 3' },
  { title: 'Service 4', description: 'Description of Service 4' },
  // Add more services as needed
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentIndex < services.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (direction === 'right' && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid" {...handlers}>
        {services.map((service, index) => (
          <div
            className={`service-card ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={() => handleSwipe('right')} disabled={currentIndex === 0}>Previous</button>
        <button onClick={() => handleSwipe('left')} disabled={currentIndex === services.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default Services;
