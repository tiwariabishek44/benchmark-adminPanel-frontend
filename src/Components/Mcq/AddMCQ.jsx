"use-strict";  // Use strict mode to enforce cleaner JavaScript code

import React, { useState } from 'react';  // Import React and useState hook
import './AddMCQ.css';  // Import the CSS file for styling
import { BookRepository } from '../../Respsitory/bookRespsitory';  // Import BookRepository from repository file
import { Modal, message } from 'antd';  // Import Modal and message components from antd library

const AddMCQ = () => {
  const [modalOpen, setModalOpen] = React.useState(false);  // State to manage modal visibility

  const mcqRespository = new BookRepository();  // Create instance of BookRepository

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    // Access input values using form elements
    const fileName = e.target.elements["file-name"].value;
    const description = e.target.elements.description.value;
    const fileInputValue = e.target.elements["file-input"].files[0];

    const formData = new FormData();  // Create new FormData object
    formData.append("book-type", "MCQ");
    formData.append("name", fileName);
    formData.append("description", description);
    formData.append("file", fileInputValue);

    // Upload book data using BookRepository
    mcqRespository.uploadBook(formData).then(result => {
      if (result && result?.message) {
        setModalOpen(true);  // Open modal on successful upload
        e.target.reset();  // Reset form after successful upload
      }
    });
  };

  return (
    <div className="container">
      <h1 className="title">Upload MCQ Books</h1>
      <form onSubmit={handleSubmit}>
        {/* Input field for book name */}
        <label className="form-label">
          Name:
          <input className="text-input" type="text" name="file-name" required />
        </label>
        {/* Input field for book description */}
        <label className="form-label">
          Description:
          <input className="text-input" type="text" name="description" required />
        </label>
        {/* Input field for file upload */}
        <label className="form-label">
          File Upload:
          <input className="file-input" type="file" name="file-input" required />
        </label>
        {/* Button to submit the form */}
        <button className="submit-button" type="submit">Submit</button>
      </form>

      {/* Modal component to display success message */}
      <Modal open={modalOpen} title="Success" onOk={() => { setModalOpen(false) }} onCancel={() => { setModalOpen(false) }}>
        <p>MCQ upload Success</p>
      </Modal>
    </div>
  );
};

export default AddMCQ;
