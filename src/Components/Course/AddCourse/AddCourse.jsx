import React, { useState } from "react";
import axios from "axios";
// import "./AddCourse.css";
import './AddCourse.css';

import { Modal } from 'antd';
import { BookRepository } from "../../../Respsitory/bookRespsitory";

// import upload_area from "../../assets/upload_area.svg";
// import pdfLogo from "../../assets/pdf.png";

const addcourse = () => {
  const [modalOpen, setModalOpen]= React.useState(false)

  const bookRepository = new BookRepository();




  const handleSubmit = (e) => {
    e.preventDefault();
   // Access input values using form elements
   const grade = e.target.elements.grade.value;
   const stream = e.target.elements.stream.value;
   const subject = e.target.elements.subject.value;
   const slug = e.target.elements.slug.value;
   const price = e.target.elements.price.value;

   const data ={
    grade,
    subject,
    slug,
    stream,
    price
  }
  bookRepository.createSubject(data).then(result =>{
    if(result && result?.message){
      setModalOpen(true)
      e.target.reset();
   
    }
  });

  };

  return (
    <div className="container">
      <h1 className="title">Upload Course </h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Grade:
          <input className="text-input" type="text" name="grade" required/>
        </label>
        <label className="form-label">
          Stream
          <input className="text-input" type="text" name="stream" required/>
        </label>
        <label className="form-label">
          Subject
          <input className="text-input" type="text" name="subject" required/>
        </label>
        <label className="form-label">
          Slug :
          <input className="text-input" type="text" name="slug" required/>
        </label>
        <label className="form-label">
          Price:
          <input className="text-input" type="text" name="price" required/>
        </label>
        <button className="submit-button" type="submit">Submit</button>
      </form>

      <Modal  open={modalOpen} title="Success" onOk={()=>{setModalOpen(false)}} onCancel={()=>{setModalOpen(false)}}>
        <p>Course Creation Success</p>
      </Modal>
    </div>
  );
};

export default addcourse;
