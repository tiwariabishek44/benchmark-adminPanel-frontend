import React from "react";
import "./CourseList.css";
import Popup from 'reactjs-popup/dist/reactjs-popup.esm';
import Notelist from '../Note/NoteList';
import open_icon from './../../../assets/svg-logo/open.svg';
import { BookRepository } from "../../../Respsitory/bookRespsitory";
import { Modal } from "antd";
import cross from './../../../assets/cross.png';


const CourseList = () => {
  const bookRepository = new BookRepository();
  const [courses, setCourse] = React.useState([]);

  React.useEffect(()=>{
    bookRepository.getAllSubject().then(data =>{
      if(data?.data){
        setCourse(data?.data)
      }
    })
  },[])

  const handleopenNote = (noteId) => {
    console.log("Removing note with ID:", noteId);
  };

  return (
    <table className="courseDetail">
      <thead>
        <tr className="courseDetail-format-main">
          <th>Class</th>
          <th>Stream</th>
          <th>Subject</th>
          <th>Slug</th>
          <th>Price</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={course.grade + course.stream + course.subject + course.price + index} className="courseDetail-format">
            <td>{course.grade}</td>
            <td>{course.stream}</td>
            <td>{course.subject}</td>
            <td>{course.slug}</td>
            <td>{course.price}</td>
            <td>
              <Popup
              trigger={ <img
              src={open_icon}
              // style={{marginLeft:'50px'}}
              alt="open Icon"
              className="courseDetail-open-icon"
              
              onClick={() => handleopenNote(index)} // Pass index as noteId for simplicity
            />} 
                modal nested >
                {
                    close => (
                        <div className='popup' >
                          <div className="popup-close" onClick={close} ><img src={cross} alt=""  /></div>
                               <Notelist courseId={course.id} grade={course.grade} stream={course.stream} subject={course.subject} />
                        </div>
                    )
                }
            </Popup>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
