import React from "react";
import "./Manual.css"; // Importing CSS file for styling
import Popup from 'reactjs-popup/dist/reactjs-popup.esm'; // Importing Popup component
import open_icon from './../../../assets/svg-logo/open.svg'; // Importing open icon image
import { BookRepository } from "../../../Respsitory/bookRespsitory"; // Importing BookRepository
import { Modal } from "antd"; // Importing Modal component from Ant Design
import cross from './../../../assets/cross.png'; // Importing close icon image
import Notelist from "../../Course/Note/NoteList";
import ManualList from "../ManualLIst/ManualList";

const Manual = () => {
  const bookRepository = new BookRepository(); // Creating an instance of BookRepository
  const [courses, setCourse] = React.useState([]); // State hook for courses

  // Effect hook to fetch all subjects from BookRepository
  React.useEffect(() => {
    bookRepository.getAllSubject().then(data => {
      if (data?.data) {
        setCourse(data?.data); // Set courses state with fetched data
      }
    });
  }, []);

  // Function to handle opening notes for a course
  const handleopenNote = (noteId) => {
    console.log("Removing note with ID:", noteId); // Log note removal (for demonstration)
  };

  return (
    <div style={{width:"100%"}}>
    <table className="courseDetail"> {/* Render table for displaying course details */}
      <thead>
        <tr className="courseDetail-format-main"> {/* Table header row */}
          <th>Class</th> {/* Header for Class column */}
          <th>Stream</th> {/* Header for Stream column */}
          <th>Subject</th> {/* Header for Subject column */}
          <th>Slug</th> {/* Header for Slug column */}
          <th>Manual</th> {/* Header for Notes column */}
        </tr>
      </thead>
      <tbody>
        {/* Map through courses array to render each course as a table row */}
        {courses.map((course, index) => (
          <tr key={course.grade + course.stream + course.subject + course.price + index} className="courseDetail-format">
            <td>{course.grade}</td> {/* Display grade in Class column */}
            <td>{course.stream}</td> {/* Display stream in Stream column */}
            <td>{course.subject}</td> {/* Display subject in Subject column */}
            <td>{course.slug}</td> {/* Display slug in Slug column */}
           <td>
              {/* Popup component triggered by open icon */}
              <Popup
                trigger={<img
                  src={open_icon}
                  alt="open Icon"
                  className="courseDetail-open-icon"
                  onClick={() => handleopenNote(index)} // Handle opening notes on icon click
                />}
                modal nested
              >
                {close => (
                  <div className='popup'>
                    <div className="popup-close" onClick={close}><img src={cross} alt="" /></div> {/* Close button */}
                    {/* Render NoteList component for the selected course */}
                    <ManualList courseId={course.id} />
                  </div>
                )}
              </Popup>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Manual;
