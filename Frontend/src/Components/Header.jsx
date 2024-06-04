import logo from '../assets/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isAuthenticated = false; // Set to true if the user is authenticated

  return (
    <div>
      <div className='header'>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Joy" />
          </Link>
          {/* Navigation links */}
          <nav ref={sidebarRef} className={`nav-links ${isOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="/" onClick={closeSidebar}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={closeSidebar}>About</Link>
              </li>
              <li>
                <Link to="/services" onClick={closeSidebar}>Services</Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeSidebar}>Contact</Link>
              </li>
              {isAuthenticated ? (
                <li>
                  <Link to="/login" onClick={closeSidebar}>Login</Link>
                </li>
              ) : (
                <li  className='btn'>
                  <Link to="/register" onClick={closeSidebar} > <i className='textbtn'>Book Now</i> </Link>
                </li>
              )}
            </ul>
          </nav>
          <div className={`breadcrumb ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
