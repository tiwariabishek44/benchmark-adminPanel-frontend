import React from "react";
import "./ManualList.css";
import pdf_icon from './../../../assets/pdf.png';
import remove_icon from './../../../assets/remove_icon.png';
import open_icon from './../../../assets/svg-logo/open.svg';
import { BookRepository } from "../../../Respsitory/bookRespsitory";
import { Link } from "react-router-dom";
import { Popconfirm } from "antd";

const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

const ManualList = (props) => {

  const courseId = props.courseId;
  const bookRepository = new BookRepository()

  

  const [notes, setNotes] = React.useState([])

  React.useEffect(()=>{
    bookRepository.getManualOfSubject(courseId)
    .then(result =>{
      if(result && result?.success){
        setNotes(result.data)
      }
    })
  },[])



  
  const handleRemoveNote = (noteId) => {
    // Implement logic to remove note from the list
    // Update allnote state after removing the note
    bookRepository.deleteManual(noteId).then(result =>{
      if(result && result?.success){
        bookRepository.getManualOfSubject(courseId)
    .then(result =>{
      if(result && result?.success){
        setNotes([...result.data])
      }
    })
      }
    })
  };

  const openFile = (fileLocation) =>{
        bookRepository.downloadBook(fileLocation).then(fileData =>{
          if(fileData==null){
            return; 
          }
          const href = URL.createObjectURL(fileData);
          const link = document.createElement('a');
          link.href = href;
          link.setAttribute('download', fileLocation.substring(fileLocation.lastIndexOf("/")+1));
          link.setAttribute('target','_blank');
          document.body.appendChild(link);
          link.click();
          URL.revokeObjectURL(href);
        })
       
     
  }

  return (
    <div className="notelist">
      <div className="notelist-format-main">
        <p>S.N</p>
        <p>Name</p>
        <p>Description</p>
        <p>Open File</p>
        <p>Remove</p> {/* Moved "Remove" label here */}
      </div>
      <hr />
      <div className="notelist-list">
        {notes.map((note, index) => (
          <div key={index+note.fileLocation} className="notelist-format">
            <img src={pdf_icon} alt="PDF Icon" className="notelist-icon" />
            <p>{note.name}</p>
            <p>{note.description}</p>
            <button onClick={()=> {openFile(note.fileLocation)}}>Open File</button>

            {/* <Popconfirm
    title="Delete the MCQ"
    description="Are you sure to delete this item?"
    onConfirm={() => handleRemoveNote(note.id)}
    okText="Yes"
    cancelText="No"
  > */}
            <img
              src={remove_icon}
              alt="Remove Icon"
              className="notelist-remove-icon"
              onClick={() => handleRemoveNote(note.id)}
            />
            {/* </Popconfirm> */}
          </div>
        ))}
      </div>
      
<Link to={"/admin-panel/add-manual/"+courseId} style={{textDecoration:"none"}}>
<div className="add-course-note">
          + Add Manual
          </div>
      </Link>
     
    </div>
  );
};

export default ManualList;
