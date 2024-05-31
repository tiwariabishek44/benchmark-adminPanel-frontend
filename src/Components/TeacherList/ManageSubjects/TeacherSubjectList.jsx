import React, { useEffect, useState } from 'react'; // React library imports
import './TeacherSubjectList.css'; // CSS styles import
// Teacher repository import
import { Link, useParams } from 'react-router-dom';
import TeacherRepository from '../../../Respsitory/teacherRepositry';

const TeacherSubjectList = (params) => { // TeacherList functional component
  const {email}  = params; 

  const teacherRepository = new TeacherRepository(); // Teacher repository instance creation
 const [assignedSubjects, setAssignedSubjects] = useState([]); // State variable to store assigned subjects
 React.useEffect(()=> {
 
 teacherRepository.getAssignedSubjects(email).then((response) => {
  if(response&& response.length > 0) {
    console.log(response);
      setAssignedSubjects(response); // Set assigned subjects in state
  
   }  } );

}
  ,[])

  const refresh = () => {
    
 teacherRepository.getAssignedSubjects(email).then((response) => {
  if(response&& response.length > 0) {
    console.log(response);
      setAssignedSubjects(response); // Set assigned subjects in state
  
   }  } );

  }

  const assignSubject = (email, subjectId) => {
    teacherRepository.assignSubject(email, subjectId).then((response) => {
    refresh();
    });
  }

  const unAssignSubject = (email, subjectId) => {
    teacherRepository.unAssignSubject(email, subjectId).then((response) => {
     refresh();
    });
  }


  return (
    <div className="teacherListContainer">
    <h2 className="header">Subject List</h2>
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Class</th>
            <th>Stream</th>
            <th>Assigned</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {assignedSubjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.subject.subject}</td>
              <td>{subject.subject.grade}</td>
              <td>{subject.subject.stream}</td>
              <td>{subject.assigned ? "Assigned" : "Not Assigned"}</td>
              <td>
                {subject.assigned ? (
                  <button
                    className="actionButton assigned" /* Apply assigned class */
                    onClick={() => unAssignSubject(email, subject.subject.id)}
                  >
                    Unassign
                  </button>
                ) : (
                  <button
                    className="actionButton unassigned" /* Apply unassigned class */
                    onClick={() => assignSubject(email, subject.subject.id)}
                  >
                    Assign
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default TeacherSubjectList; // Export TeacherList component
