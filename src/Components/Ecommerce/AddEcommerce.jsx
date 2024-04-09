"use-strict"

import React, { useState } from 'react';
import './AddEcommerce.css'; // Import the CSS file
import { BookRepository } from '../../Respsitory/bookRespsitory';
import { Modal } from 'antd';

const AddEcommerce  = () => {
  const [modalOpen, setModalOpen]= React.useState(false)

  const bookRepository = new BookRepository();




  const handleSubmit = (e) => {
    e.preventDefault();
   // Access input values using form elements
   const fileName = e.target.elements["file-name"].value;
   const description = e.target.elements.description.value;
   const price = e.target.elements.price.value;
   const fileInputValue = e.target.elements["file-input"].files[0];

  const formData = new FormData();
  formData.append("book-type","PUBLICATIONS");
  formData.append("name", fileName);
  formData.append("description",description)
  formData.append("price",price)
  formData.append("file", fileInputValue);
  bookRepository.uploadBook(formData).then(result =>{
    if(result && result?.message){
      setModalOpen(true)
      e.target.reset();
   
    }
  });

  };

  return (
    <div className="container">
      <h1 className="title">Upload Ecommerce Books</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input className="text-input" type="text" name="file-name" required/>
        </label>
        <label className="form-label">
          Description
          <input className="text-input" type="text" name="description" required/>
        </label>
        <label className="form-label">
          price
          <input className="text-input" type="text" name="price" required/>
        </label>
        <label className="form-label">
          File Upload:
          <input className="file-input" type="file" name="file-input" required/>
        </label>
        <button className="submit-button" type="submit">Submit</button>
      </form>

      <Modal  open={modalOpen} title="Success" onOk={()=>{setModalOpen(false)}} onCancel={()=>{setModalOpen(false)}}>
        <p>Ecommerce item upload Success</p>
      </Modal>
    </div>
  );
};

export default AddEcommerce;
