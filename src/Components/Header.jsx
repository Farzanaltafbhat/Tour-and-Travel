import logo from '../assets/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, and useRef hooks

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track whether sidebar is open or closed
  const sidebarRef = useRef(null); // Reference to the sidebar element

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  const closeSidebar = () => {
    setIsOpen(false); // Close the sidebar
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); // Close the sidebar if clicked outside of it
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
              <li>
                <Link to="/login" onClick={closeSidebar}>Login</Link>
              </li>
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
