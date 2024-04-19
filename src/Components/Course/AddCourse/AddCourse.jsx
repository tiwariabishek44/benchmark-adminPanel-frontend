import React, { useState } from "react";
import axios from "axios"; // Importing axios for making HTTP requests
import './AddCourse.css'; // Importing CSS file for styling
import { Modal } from 'antd'; // Importing Modal component from Ant Design
import { BookRepository } from "../../../Respsitory/bookRespsitory"; // Importing BookRepository

const AddCourse = () => {
  // State hook to manage modal visibility
  const [modalOpen, setModalOpen] = React.useState(false);

  // Creating an instance of BookRepository
  const bookRepository = new BookRepository();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Access input values using form elements
    const grade = e.target.elements.grade.value;
    const stream = e.target.elements.stream.value;
    const subject = e.target.elements.subject.value;
    const slug = e.target.elements.slug.value;
    const price = e.target.elements.price.value;

    // Prepare data object with form values
    const data = {
      grade,
      subject,
      slug,
      stream,
      price
    };

    // Call BookRepository method to create a new subject
    bookRepository.createSubject(data).then(result => {
      if (result && result?.message) {
        // If creation is successful, open the modal and reset the form
        setModalOpen(true);
        e.target.reset(); // Resetting the form fields
      }
    });
  };

  return (
    <div className="container">
      <h1 className="title">Upload Course</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for grade, stream, subject, slug, and price */}
        <label className="form-label">
          Grade:
          <input className="text-input" type="text" name="grade" required/>
        </label>
        <label className="form-label">
          Stream:
          <input className="text-input" type="text" name="stream" required/>
        </label>
        <label className="form-label">
          Subject:
          <input className="text-input" type="text" name="subject" required/>
        </label>
        <label className="form-label">
          Slug:
          <input className="text-input" type="text" name="slug" required/>
        </label>
        <label className="form-label">
          Price:
          <input className="text-input" type="text" name="price" required/>
        </label>
        {/* Submit button triggers form submission */}
        <button className="submit-button" type="submit">Submit</button>
      </form>

      {/* Modal component displayed when course creation is successful */}
      <Modal
        open={modalOpen}
        title="Success"
        onOk={() => { setModalOpen(false) }}
        onCancel={() => { setModalOpen(false) }}
      >
        <p>Course Creation Success</p>
      </Modal>
    </div>
  );
};

export default AddCourse;
