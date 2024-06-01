import './Ratings.css';

const services = [
  { id: 1, name: 'Service One', rating: 4.5, description: 'Description for service one.' },
  { id: 2, name: 'Service Two', rating: 4.0, description: 'Description for service two.' },
  { id: 3, name: 'Service Three', rating: 3.5, description: 'Description for service three.' },
  { id: 4, name: 'Service Four', rating: 5.0, description: 'Description for service four.' },
];

const Ratings = () => {
  return (
    <div className="ratings-container">
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
    </div>
  );
};

export default Ratings;
