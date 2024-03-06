import React from "react";
import "./Notelist.css";
import pdf_icon from './../../../assets/pdf.png';
import remove_icon from './../../../assets/remove_icon.png';

const Notelist = () => {
  const allnotes = [
    {
      name: "Grade 11 physic pdf",
      stream: "science",
      class: "11",
      subject: "Physics",
      type: "Demo" // Adding the "type" field
    },
          {
      name: "Grade 11 physic pdf",
      stream: "science",
      class: "11",
      subject: "Physics",
      type: "Regular" // Adding the "type" field
    },
             {
      name: "Grade 11 physic pdf",
      stream: "science",
      class: "11",
      subject: "Physics",
      type: "Regular" // Adding the "type" field
    },
    // Add "type" field to other note items...
  ];

  const handleRemoveNote = (noteId) => {
    // Implement logic to remove note from the list
    // Update allnote state after removing the note
    console.log("Removing note with ID:", noteId);
  };

  return (
    <div className="notelist">
      <div className="notelist-format-main">
        <p>S.N</p>
        <p>Name</p>
        <p>Type</p>
        <p>Remove</p> {/* Moved "Remove" label here */}
      </div>
      <hr />
      <div className="notelist-list">
        {allnotes.map((note, index) => (
          <div key={index} className="notelist-format">
            <img src={pdf_icon} alt="PDF Icon" className="notelist-icon" />
            <p>{note.name}</p>
            <p>{note.type}</p>
            <img
              src={remove_icon}
              alt="Remove Icon"
              className="notelist-remove-icon"
              onClick={() => handleRemoveNote(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notelist;
