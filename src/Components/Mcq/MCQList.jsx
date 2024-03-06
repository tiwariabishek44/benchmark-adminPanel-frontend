import React from "react";
import "./MCQlist.css";
import remove_icon from "../../assets/remove_icon.png";
import pdf_icon from "../../assets/pdf.png";

const MCQlist = () => {
  const allnotes = [
    {
      name: "hi my name is abinash tiwari ",
      stream: "science",
      class: "11s",
      subject: "asdf",
    },
    {
      name: "asdf ",
      stream: "scasdfience",
      class: "11",
      subject: "asdf",
    },
    {
      name: "kailash ",
      stream: "science",
      class: "11s",
      subject: "asdf",
    },
    {
      name: "hi my name is abinash tiwari ",
      stream: "science",
      class: "11s",
      subject: "asdf",
    },
    {
      name: "asdf ",
      stream: "scasdfience",
      class: "11",
      subject: "asdf",
    },
    {
    
      name: "kailash ",
      stream: "science",
      class: "11s",
      subject: "asdf",
    },
    {
      name: "hi my name is abinash tiwari ",
      stream: "science",
      class: "11s",
      subject: "asdf",
    },
    {
      name: "asdf ",
      stream: "scasdfience",
      class: "11",
      subject: "asdf",
    },
    {
      name: "kailash ",
      stream: "science",
      class: "11s",
      subject: "asdf",
    },
    {
      name: "asdf ",
      stream: "scasdfience",
      class: "11",
      subject: "asdf",
    },
    {
      name: "kailash ",
      stream: "science",
      class: "11s",
      subject: "asdf",
    },
    {
      name: "asdf ",
      stream: "scasdfience",
      class: "11",
      subject: "asdf",
    },
    {
      name: "kailash ",
      stream: "science",
      class: "11s",
      subject: "asdf",
    },
    // Other static notes...
  ];

  const handleRemoveNote = (noteId) => {
    // Implement logic to remove note from the list
    // Update allnote state after removing the note
    console.log("Removing note with ID:", noteId);
  };

  return (
    <div className="mcqlist">
      <div className="mcqlist-format-main">
        <p>S.N</p>
        <p>Name</p>
        <p>Stream</p>
        <p>Class</p>
        <p>Subject</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="mcqlist-list">
        {allnotes.map((note, index) => (
          <div key={index} className="mcqlist-format">
            <img src={pdf_icon} alt="PDF Icon" className="mcqlist-icon" />
            <p>{note.name}</p>
            <p>{note.stream}</p>
            <p>{note.class}</p>
            <p>{note.subject}</p>
            <img
              src={remove_icon}
              alt="Remove Icon"
              className="mcqlist-remove-icon"
              onClick={() => handleRemoveNote(index)} // Pass index as noteId for simplicity
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MCQlist;
