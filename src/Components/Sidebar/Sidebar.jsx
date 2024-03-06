import React from 'react'
import './Sidebar.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import add_product_icon from '../../assets/Product_Cart.svg'
import list_product_icon from "../../assets/Product_list_icon.svg"
import logo from "../../assets/logo.png"
import shop from '../../assets/svg-logo/shop.svg'
import product from '../../assets/svg-logo/product.svg'
import users from '../../assets/svg-logo/users.svg'
import Course from './../Course/Course';




const Sidebar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const currentPathName = pathname.substring(13);
    console.log(currentPathName)
    return (
        
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <Link to={'./dashboard'} style={{ textDecoration: "none" }} >
                <button className="sidbar-item"
                style={currentPathName==='dashboard'?{color:"black",backgroundColor:'antiquewhite',}:{}}
                >
                    <img src={product} alt=""  />
                    <p>Dashboard</p>
                </button>
            </Link>

     

        

            <Link to={'./course'} style={{ textDecoration: "none" }} >
                <button className="sidbar-item"
                style={currentPathName==='course'?{color:"black",backgroundColor:'antiquewhite'}:{}}
                >
                    <img src={add_product_icon} alt="" style={{fill:'red'}} />
                    <p>Course</p>
                </button>
            </Link>

            
              <Link to={'./note'} style={{ textDecoration: "none" }} >
                <button className="sidbar-item"
                style={currentPathName==='note'?{color:"black",backgroundColor:'antiquewhite'}:{}}
                >
                    <img src={add_product_icon} alt=""  />
                    <p>Note</p>
                </button>
            </Link>

            
                <Link to={'./mcq'} style={{ textDecoration: "none" }} >
                <button className="sidbar-item"
                style={currentPathName==='mcq'?{color:"black",backgroundColor:'antiquewhite'}:{}}
                >
                    <img src={add_product_icon} alt=""  />
                    <p>MCQ</p>
                </button>
            </Link>


    

            <Link to={'./teacherList'} style={{ textDecoration: "none" }} >
                <button className="sidbar-item"
                style={currentPathName==='teacherList'?{color:"black",backgroundColor:'antiquewhite'}:{}}
                >
                    <img src={users} alt="" />
                    <p>Teachers </p>
                </button>
            </Link>

         
        <Link to={'./studentList'} style={{ textDecoration: "none" }} >
                <button className="sidbar-item"
                style={currentPathName==='studentList'?{color:"black",backgroundColor:'antiquewhite'}:{}}
                >
                    <img src={users} alt="" />
                    <p>Students</p>
                </button>
            </Link>


            <Link to={'./'} style={{ textDecoration: "none" }} >
                <button className="sidbar-item" 
                style={currentPathName===''?{color:"black",backgroundColor:'antiquewhite'}:{}}
                // onClick={navigate('/')}
                >
                    <img src={shop} alt="" style={{fill:'red'}} />
                    <p>LogOut </p>
                </button>
            </Link>
            {currentPathName}
        </div>
    )
}

export default Sidebar

