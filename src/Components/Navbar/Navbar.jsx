import React from 'react'; // Import React
import './Navbar.css'; // Import CSS file for Navbar styling
import navlogo from '../../assets/nav-logo.svg'; // Import navigation logo image
import navProfile from '../../assets/nav-profile.svg'; // Import navigation profile image

// Navbar component definition
const Navbar = () => {
  return (
    <div className="navbar"> {/* Navbar container */}
      <img src={navlogo} alt="" className="nav-logo" /> {/* Navigation logo */}
      <img src={navProfile} alt="" className="nav-profile" /> {/* Navigation profile */}
    </div>
  )
}

export default Navbar; // Export Navbar component
