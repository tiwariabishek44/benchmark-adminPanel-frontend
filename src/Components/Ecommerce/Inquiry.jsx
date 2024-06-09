import React, { useState } from "react";
import './Inquiry.css';  // Import CSS file
import { BookRepository } from "../../Respsitory/bookRespsitory";  // Import BookRepository
import { Modal, Popconfirm } from "antd";  // Import Popconfirm component
import { EcommerceRepository } from "../../Respsitory/ecommerceRepository";  // Import EcommerceRepository
import { consoleLog } from "../../utils/helpers";  // Import consoleLog helper
import open_icon from './../../assets/svg-logo/open.svg';  // Import open icon SVG
import Notelist from "../Course/Note/NoteList";  // Import NoteList component
import Popup from "reactjs-popup";  // Import Popup component
import cross from './../../assets/cross.png';  // Import cross icon

const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;  // Base URL from environment variable

const Inquirysa = () => {
  const ecommerceRepository = new EcommerceRepository();  // Initialize EcommerceRepository

  const [inquiry, setinquiry] = useState([]);  // State to hold inquiry data

  const [isModalOpen, setModelOpen] = useState(false)

  const [bookData, setBookData] = useState({})

  // Fetch all inquiries on component mount
  React.useEffect(() => {
    ecommerceRepository.getAllInquiry().then(data => {
      if (data?.data) {
        setinquiry(data?.data);  // Set fetched inquiries to state
      }
    });
  }, []);
  
  // Function to handle removal of inquiry by ID
  const handleRemoveInquiry = (id) => {
    ecommerceRepository.deleteInquiry(id).then(data => {
      if (data?.success) {
        // If deletion is successful, fetch updated inquiry list
        ecommerceRepository.getAllInquiry().then(data => {
          if (data?.data) {
            setinquiry(data?.data);  // Update inquiry list in state
          }
        });
      }
    });
  };

  const getEcommerceBook = async (id) => {
    ecommerceRepository.getEcommerceBook(id).then(result => {
      if(result){
      
        setBookData({
          "name": result.data.name,
    "description": result.data.description,
    "fileLocation": result.data.fileLocation,
    "price": result.data.price
        })
        setModelOpen(true);
      }
    })
  }

  console.log(inquiry[1]);  // Log the second element of the inquiry array

  return (
    <div className="inquiry">
      {/* Render inquiries in a table */}
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <td>Book</td>
            <th>Student Name</th>
            <th>Phone Number</th>
            <th>Message</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through inquiry array and render each inquiry */}
          {inquiry.map((inq, index) => (
            <tr key={inq.id}>
              <td>{index + 1}</td>
              <td><button onClick={()=>{getEcommerceBook(inq.bookId)}}>View Book</button></td>
              <td>{inq.name}</td>
              <td>{inq.phoneNumber}</td>
              <td>{inq.message}</td>
              <td>
                {/* Confirm removal on button click */}
                <Popconfirm
                  title="Delete the inquiry"
                  description="Are you sure to delete this inquiry?"
                  onConfirm={() => handleRemoveInquiry(inq.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="rmv-button">Remove</button>
                </Popconfirm>
              </td>
            </tr>
          ))}

          <Modal open={isModalOpen} onCancel={()=>{setBookData({});setModelOpen(false)}}
          onOk={()=>{setBookData({});setModelOpen(false)}}>
           
            <p><img style={{width:"250px", height:"250px"}} src={(VITE_REACT_APP_BASE_URL=="/"?"":VITE_REACT_APP_BASE_URL)+bookData.fileLocation} /></p>
            <p>Name: {bookData.name}</p>
            <p>Description: {bookData.description}</p>
            <p>Price: {bookData.price}</p>
          </Modal>
        </tbody>
      </table>
    </div>
  );
};

export default Inquirysa;
