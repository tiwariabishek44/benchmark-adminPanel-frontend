import React, { useState } from "react";
import './Inquiry.css';
import { BookRepository } from "../../Respsitory/bookRespsitory";
import { Popconfirm } from "antd";
import { EcommerceRepository } from "../../Respsitory/ecommerceRepository";
import { consoleLog } from "../../utils/helpers";
import open_icon from './../../assets/svg-logo/open.svg';
import Notelist from "../Course/Note/NoteList";
import Popup from "reactjs-popup";
import cross from './../../assets/cross.png';

const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

const Inquirysa = () => {

  const ecommerceRepository = new EcommerceRepository()
 
//   const [mcq, setMcq] = React.useState([]);
const [inquiry, setinquiry] = useState([])

  React.useEffect(()=>{
    ecommerceRepository.getAllInquiry()
    .then(data =>{
      if(data?.data){
        setinquiry(data?.data)
      }
    })
  
  }, [])
  

  const handleRemoveInquiry = (id) => {
  ecommerceRepository.deleteInquiry(id)
  .then(data => {
    if(data?.success){
      ecommerceRepository.getAllInquiry()
    .then(data =>{
      if(data?.data){
        setinquiry(data?.data)
      }
    })
    }
  })
  };
  console.log(inquiry[1]);

  return (
    <div className="inquiry">
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Student Name</th>
            <th >Phone Number</th>
            <th>Message</th>
            {/* <th> View Item</th> */}
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {inquiry.map((inq, index) => (
            <tr key={inq.id}>
              <td>{index + 1}</td>
              <td>{inq.name}</td>
              <td>{inq.phoneNumber}</td>
              <td>{inq.message}</td>
              {/* <td>

              <Popup
              trigger={ <img
              src={open_icon}
              // style={{marginLeft:'50px'}}
              alt="open Icon"
              className="courseDetail-open-icon"
              
              onClick={() => handleopenNote(index)} // Pass index as noteId for simplicity
            />} 
                modal nested >
                {
                    close => (
                        <div className='popup' >
                          <div className="popup-close" onClick={close} ><img src={cross} alt=""  /></div>
                        
                        <div className="popup-container-main">
                          <div>Book Name: {inq.book.name}</div>
                          <div>Description: {inq.book.description}</div>
                          <div>Price: {inq.book.price}</div>
                          <div> <img src={VITE_REACT_APP_BASE_URL+inq.book.fileLocation} /></div>
                        </div>
                        
                        
                                              </div>
                    )
                }
            </Popup>
              </td> */}
        
          
              
            
              <td>
                <Popconfirm
                  title="Delete the MCQ"
                  description="Are you sure to delete this MCQ?"
                  onConfirm={() => handleRemoveInquiry(inq.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <button className="rmv-button">Remove</button>
                </Popconfirm>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inquirysa;
