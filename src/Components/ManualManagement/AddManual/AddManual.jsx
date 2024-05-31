"use-strict"

import { useParams } from "react-router-dom";
import { Modal } from "antd";
import React from "react";

import "./AddManual.css"
import { BookRepository } from "../../../Respsitory/bookRespsitory";

export default function AddManual(){
    const { courseId} = useParams();

    const bookRepository = new BookRepository();

    const [modalOpen, setModalOpen]= React.useState(false)



  const handleSubmit = (e) => {
    e.preventDefault();
   // Access input values using form elements
   const fileName = e.target.elements["file-name"].value;
   const description = e.target.elements.description.value;
   const fileInputValue = e.target.elements["file-input"].files[0];

  const formData = new FormData();
  formData.append("subjectId", courseId);
  formData.append("name", fileName);
  formData.append("description",description);
  formData.append("file", fileInputValue);
  bookRepository.uploadManual(formData).then(result =>{
    if(result && result?.message){
      setModalOpen(true)
      e.target.reset();
   
    }
  });

  };

  if(courseId==null || courseId?.length==0){
    return   <div className="addnote"> Invalid Page </div>
  }

    return (
        <div className="addnote">
          <h1 className="title">Upload Note Books</h1>
          <form onSubmit={handleSubmit}>
            <label className="form-label">
              Name:
              <input className="text-input" type="text" name="file-name" required />
            </label>
            <label className="form-label">
              Description
              <input className="text-input" type="text" name="description" required/>
            </label>
            <label className="form-label">
              File Upload:
              <input className="file-input" type="file" name="file-input" required />
            </label>
            <button className="submit-button" type="submit">Submit</button>
          </form>
    
          <Modal  open={modalOpen} title="Success" onOk={()=>{setModalOpen(false)}} onCancel={()=>{setModalOpen(false)}}>
            <p>File upload Success</p>
          </Modal>
        </div>
      );
}