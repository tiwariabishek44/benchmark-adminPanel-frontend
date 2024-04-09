import React, { useState } from 'react';
import './Modal.css'; // Import your modal styles

const Modal = ({ isOpen, onClose, message }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
    <div className="modal-content">
      <span className="close" onClick={onClose}>&times;</span>
      <div className="modal-body">
        <h2 className="fancy-text">Error Occurred!</h2>
        {message}
       
      </div>
      <button className="ok-button" onClick={onClose}>
          OK
          <span className="ok-icon">&#10004;</span>
        </button>
    </div>
  </div>
  );
};



export default Modal;


