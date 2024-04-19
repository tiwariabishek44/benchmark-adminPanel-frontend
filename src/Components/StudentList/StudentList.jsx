import React from 'react'; // React library import
import './StudentList.css'; // CSS styles import
import StudentRepository from '../../Respsitory/studentRepository'; // Student repository import

const StudentList = () => { // StudentList functional component

  const studentRepository = new StudentRepository() // Student repository instance creation

  const [studentData, setStudentData] = React.useState([]) // State for student data

  React.useEffect(()=>{ // useEffect hook for fetching student data
    studentRepository.getAllStudentWitlPurchase().then(data => { // Fetch student data
      setStudentData(data?.data); // Set student data in state
      console.log("studentList: " ,data?.data) // Log student data
    })
  },[]) // Run effect only once on component mount

  return (
    <div className="studentListContainer"> {/* Student list container */}
      <h2 className="header">Student List</h2> {/* Header */}
      <div className="tableWrapper"> {/* Table wrapper */}
        <table className="studentTable"> {/* Student table */}
          <thead> {/* Table header */}
            <tr> {/* Table row */}
              <th>Student Name</th> {/* Student name column */}
              <th>Email</th> {/* Email column */}
              <th>Phone Number</th> {/* Phone number column */}
              <th>Stream</th> {/* Stream column */}
            </tr>
          </thead>
          <tbody> {/* Table body */}
            {studentData.map((student, index) => ( // Map through student data to render rows
              <tr key={index}> {/* Table row */}
                <td>{student.name}</td> {/* Student name column */}
                <td>{student.email}</td> {/* Email column */}
                <td>{student.phoneNumber}</td> {/* Phone number column */}
                <td>{student.stream}</td> {/* Stream column */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList; // Export StudentList component
