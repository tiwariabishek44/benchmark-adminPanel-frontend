import React from 'react';
import './StudentList.css';
import StudentRepository from '../../Respsitory/studentRepository';

const StudentList = () => {
   
  const studentRepository = new StudentRepository()

  const [studentData, setStudentData] = React.useState([])

  React.useEffect(()=>{
    studentRepository.getAllStudentWitlPurchase().then(data => {
      console.log("studentList: " ,data)
    })
  },[])

  return (
    <div className="studentListContainer">
      <h2 className="header">Student List</h2>
      <div >
        <table className="studentTable">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Class</th>
              <th>Stream</th>
            </tr>
          </thead>
          <tbody>
            {/*
            
              "id": 0,
      "email": "string",
      "phoneNumber": "string",
      "name": "string",
      "password": "string",
      "accountType": "STUDENT",
      "stream": "SCIENCE",
      "createdDate": "2024-03-13",
      "isActive": true,
      "isVerified": true
          
  */}
            {studentData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phoneNuber}</td>
                <td>{student.stream}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
