import React from 'react'; // Import React
import './Sidebar.css'; // Import sidebar styles
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import necessary utilities
import add_product_icon from '../../assets/Product_Cart.svg'; // Import icons
import users from '../../assets/svg-logo/users.svg'; // Import user icon
import logo from "../../assets/logo.png"; // Import logo
import { clearTokens } from '../../utils/tokenUtils'; // Import token utility

// Sidebar component definition
const Sidebar = () => {
    const navigate = useNavigate(); // Navigation hook
    const { pathname } = useLocation(); // Location hook
    const currentPathName = pathname.substring(13); // Get current path name

    // Logout function
    const logOut = () =>{
        clearTokens(); // Clear tokens
        navigate("/"); // Navigate to home
    }

    // Return JSX for sidebar
    return (
        <div className="sidebar"> {/* Sidebar container */}
            <div className="logo"> {/* Logo */}
                <img src={logo} alt="Logo" />
            </div>

            {/* Course link */}
            <Link to={'./course'} style={{ textDecoration: "none" }}>
                <button className="sidbar-item" style={currentPathName==='course'?{color:"black",backgroundColor:'antiquewhite'}:{}}>
                    <img src={add_product_icon} alt="Course" />
                    <p>Course</p>
                </button>
            </Link>

            {/* MCQ link */}
            <Link to={'./mcq'} style={{ textDecoration: "none" }}>
                <button className="sidbar-item" style={currentPathName==='mcq'?{color:"black",backgroundColor:'antiquewhite'}:{}}>
                    <img src={add_product_icon} alt="MCQ" />
                    <p>MCQ</p>
                </button>
            </Link>

            {/* Ecommerce link */}
            <Link to={'./ecommerce'} style={{ textDecoration: "none" }}>
                <button className="sidbar-item" style={currentPathName==='ecommerce'?{color:"black",backgroundColor:'antiquewhite'}:{}}>
                    <img src={add_product_icon} alt="Ecommerce" />
                    <p>Ecommerce</p>
                </button>
            </Link>

            {/* Teacher list link */}
            <Link to={'./teacherList'} style={{ textDecoration: "none" }}>
                <button className="sidbar-item" style={currentPathName==='teacherList'?{color:"black",backgroundColor:'antiquewhite'}:{}}>
                    <img src={users} alt="Teachers" />
                    <p>Teachers</p>
                </button>
            </Link>

            {/* Student list link */}
            <Link to={'./studentList'} style={{ textDecoration: "none" }}>
                <button className="sidbar-item" style={currentPathName==='studentList'?{color:"black",backgroundColor:'antiquewhite'}:{}}>
                    <img src={users} alt="Students" />
                    <p>Students</p>
                </button>
            </Link>


            <Link to={'./manual'} style={{ textDecoration: "none" }}>
                <button className="sidbar-item" style={currentPathName==='manual'?{color:"black",backgroundColor:'antiquewhite'}:{}}>
                    <img src={users} alt="Students" />
                    <p>Manual Notes</p>
                </button>
            </Link>


            {/* Logout button */}
            <Link to={'/'} style={{ textDecoration: "none" }}>
                <div className="logout-button" >
                    <button onClick={logOut}>Logout</button>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar; // Export Sidebar component
