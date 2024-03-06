import React from "react";
import "./Courselist.css";
import Popup from 'reactjs-popup/dist/reactjs-popup.esm';
import Notelist from '../Note/NoteList';
import remove_icon from './../../../assets/remove_icon.png';


const CourseList = () => {

  const allcourses = [
  {
    stream: "Science",
    class: "11",
    subject: "Physics",
    price: "150",
  },
  {
    stream: "Science",
    class: "11",
    subject: "Chemistry",
    price: "150",
  },
  {
    stream: "Science",
    class: "11",
    subject: "Biology",
    price: "150",
  },
  {
    stream: "Science",
    class: "11",
    subject: "Mathematics",
    price: "150",
  },
  // Class 11 Management Subjects
  {
    stream: "Management",
    class: "11",
    subject: "Accountancy",
    price: "150",
  },
  {
    stream: "Management",
    class: "11",
    subject: "Economics",
    price: "150",
  },
  {
    stream: "Management",
    class: "11",
    subject: "Business Studies",
    price: "150",
  },

  // Class 12 Science Subjects
  {
    stream: "Science",
    class: "12",
    subject: "Physics",
    price: "150",
  },
  {
    stream: "Science",
    class: "12",
    subject: "Chemistry",
    price: "150",
  },
  {
    stream: "Science",
    class: "12",
    subject: "Biology",
    price: "150",
  },
  {
    stream: "Science",
    class: "12",
    subject: "Mathematics",
    price: "150",
  },
  // Class 12 Management Subjects
  {
    stream: "Management",
    class: "12",
    subject: "Accountancy",
    price: "150",
  },
  {
    stream: "Management",
    class: "12",
    subject: "Economics",
    price: "150",
  },
  {
    stream: "Management",
    class: "12",
    subject: "Business Studies",
    price: "150",
  },
    // Other static notes...
  ];

  const handleRemoveNote = (noteId) => {
    // Implement logic to remove note from the list
    // Update allnote state after removing the note
    console.log("Removing note with ID:", noteId);
  };

  return (
    <div className="courseDetail">
      <div className="courseDetail-format-main">
        <p>Stream</p>
        <p>Class</p>
        <p>Subject</p>
        <p>Pice</p> 
        <p>Notes</p> 

        <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} > 
        <p>Remove</p>
        </div>

      </div>
      <hr />
      <div className="courseDetail-list">
        {allcourses.map((note, index) => (
          <div key={index} className="courseDetail-format"  >
            <p>{note.stream}</p>
            <p>{note.class}</p>
            <p>{note.subject}</p>
            <p>{note.price}</p>
            <Popup
              trigger={<div className="popup-button" > <button >Note</button> </div>} 
                modal nested>
                {
                    close => (
                        <div className='popup' style={{backgroundColor:'white'}} >
                               <Notelist />
                        </div>
                    )
                }
            </Popup>
            
            <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >
               <img
              src={remove_icon}
              // style={{marginLeft:'50px'}}
              alt="Remove Icon"
              className="courseDetail-remove-icon"
              onClick={() => handleRemoveNote(index)} // Pass index as noteId for simplicity
            />
           </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
