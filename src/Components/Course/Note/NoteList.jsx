import React from "react";
import "./NoteList.css";
import pdf_icon from './../../../assets/pdf.png';
import remove_icon from './../../../assets/remove_icon.png';
import open_icon from './../../../assets/svg-logo/open.svg';
import { BookRepository } from "../../../Respsitory/bookRespsitory";
import { Link } from "react-router-dom";
import { Popconfirm } from "antd";

const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

const Notelist = (props) => {

  const courseId = props.courseId;
  const grade = props.grade;
  const stream = props.stream;
  const subject = props.subject;
  const bookRepository = new BookRepository()

  

  const [notes, setNotes] = React.useState([])

  React.useEffect(()=>{
    bookRepository.getClassBooks({grade,stream,subject})
    .then(result =>{
      if(result && result?.success){
        setNotes(result.data)
      }
    })
  },[])



  
  const handleRemoveNote = (noteId) => {
    // Implement logic to remove note from the list
    // Update allnote state after removing the note
    bookRepository.deleteBook(noteId).then(result =>{
      if(result && result?.success){
        bookRepository.getClassBooks({grade,stream,subject})
    .then(result =>{
      if(result && result?.success){
        setNotes([...result.data])
      }
    })
      }
    })
  };

  const openFile = (bookType, fileLocation) =>{
      if(bookType === "PAID"){
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
       
      } else{
        const link = document.createElement('a');
        link.href = VITE_REACT_APP_BASE_URL+fileLocation;
        link.setAttribute('download', 'downloaded_file.ext');
        link.setAttribute('target','_blank');
        document.body.appendChild(link);
        link.click();
      }
  }

  return (
    <div className="notelist">
      <div className="notelist-format-main">
        <p>S.N</p>
        <p>Name</p>
        <p>Description</p>
        <p>Type</p>
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
            <p>{note.bookType}</p>
            <button onClick={()=> {openFile(note.bookType, note.fileLocation)}}>Open File</button>

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
      
<Link to={"/admin-panel/add-note/"+courseId} style={{textDecoration:"none"}}>
<div className="add-course-note">
          + Add Note
          </div>
      </Link>
     
    </div>
  );
};

export default Notelist;
