import React from 'react';
import Slider from 'react-slick';
import './Ratings.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  { id: 1, name: 'Service One', rating: 4.5, description: 'Experience the best of luxury and comfort with our premium service one, offering personalized care and top-notch amenities.' },
  { id: 2, name: 'Service Two', rating: 4.0, description: 'Our service two guarantees a memorable journey with reliable and efficient transport, ensuring your satisfaction.' },
  { id: 3, name: 'Service Three', rating: 3.5, description: 'Affordable and dependable, service three is perfect for budget-conscious travelers seeking quality service.' },
  { id: 4, name: 'Service Four', rating: 5.0, description: 'Indulge in the ultimate experience with service four, providing unparalleled luxury and exceptional customer care.' },
  { id: 5, name: 'Service Five', rating: 4.8, description: 'Service five offers a perfect blend of comfort and convenience, making your trip hassle-free and enjoyable.' },
  { id: 6, name: 'Service Six', rating: 4.2, description: 'Explore new destinations with service six, designed to cater to your adventurous spirit with reliable transportation.' },
  { id: 7, name: 'Service Seven', rating: 3.9, description: 'Service seven offers a seamless travel experience with friendly staff and timely services.' },
  { id: 8, name: 'Service Eight', rating: 4.7, description: 'Enjoy a smooth and stress-free journey with service eight, known for its exceptional punctuality and service quality.' },
];

const Ratings = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="ratings-container">
      <Slider {...settings}>
        {services.map(service => (
          <div key={service.id} className="card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div className="stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <span
                    key={index}
                    className={ratingValue <= Math.round(service.rating) ? 'on' : 'off'}
                  >
                    &#9733;
                  </span>
                );
              })}
            </div>
            <p>{service.rating} out of 5</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#000', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#000', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

export default Ratings;
