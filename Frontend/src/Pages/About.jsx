import './About.css';

const AboutUs = () => {
  return (
    <div className="about-container" >
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Our Tours and Travels was founded with the mission of providing
            exceptional travel experiences. With over a decade of experience,
            we pride ourselves on offering personalized and unique travel
            packages tailored to meet the needs of our diverse clientele.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become the leading travel agency in the region,
            known for our commitment to customer satisfaction, innovation, and
            excellence. We strive to create unforgettable travel experiences
            that inspire and enrich the lives of our customers.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team is composed of dedicated professionals who are passionate
            about travel. From our knowledgeable travel consultants to our
            experienced tour guides, we work together to ensure that every
            detail of your trip is perfect.
          </p>
        </div>
        <div className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions or need more information? Feel free to get in touch
            with us at:
          </p>
          <ul>
            <li>Email: info@Ourtours.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Address: 123 Travel Street, Adventure City, World</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
