import React from 'react';
import './StudentList.css';

const StudentList = () => {
   const studentList = [
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phoneNuber: "(555) 555-1212",
    class: "10th Grade",
    stream: "Science"
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phoneNuber: "(555) 555-2323",
    class: "11th Grade",
    stream: "Commerce"
  },
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phoneNuber: "(555) 555-1212",
    class: "10th Grade",
    stream: "Science"
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phoneNuber: "(555) 555-2323",
    class: "11th Grade",
    stream: "Commerce"
  },
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phoneNuber: "(555) 555-1212",
    class: "10th Grade",
    stream: "Science"
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phoneNuber: "(555) 555-2323",
    class: "11th Grade",
    stream: "Commerce"
  },
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phoneNuber: "(555) 555-1212",
    class: "10th Grade",
    stream: "Science"
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phoneNuber: "(555) 555-2323",
    class: "11th Grade",
    stream: "Commerce"
  },
  {
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phoneNuber: "(555) 555-1212",
    class: "10th Grade",
    stream: "Science"
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phoneNuber: "(555) 555-2323",
    class: "11th Grade",
    stream: "Commerce"
  },
  {
    name: "Charlie Miller",
    email: "charlie.miller@example.com",
    phoneNuber: "(555) 555-3434",
    class: "9th Grade",
    stream: "Arts"
  },
  {
    name: "David Williams",
    email: "david.williams@example.com",
    phoneNuber: "(555) 555-4545",
    class: "12th Grade",
    stream: "Computer Science"
  },
  {
    name: "Emily Brown",
    email: "emily.brown@example.com",
    phoneNuber: "(555) 555-5656",
    class: "10th Grade",
    stream: "Mathematics"
  },
  {
    name: "Fiona Rodriguez",
    email: "fiona.rodriguez@example.com",
    phoneNuber: "(555) 555-6767",
    class: "8th Grade",
    stream: "Humanities"
  },
  {
    name: "George Thomas",
    email: "george.thomas@example.com",
    phoneNuber: "(555) 555-7878",
    class: "7th Grade",
    stream: "Language Arts"
  },
  {
    name: "Helen Yang",
    email: "helen.yang@example.com",
    phoneNuber: "(555) 555-8989",
    class: "6th Grade",
    stream: "Social Studies"
  },
  {
    name: "Isaac Patel",
    email: "isaac.patel@example.com",
    phoneNuber: "(555) 555-9090",
    class: "5th Grade",
    stream: "Music"
  },
  {
    name: "Jasmine Lee",
    email: "jasmine.lee@example.com",
    phoneNuber: "(555) 555-0101",
    class: "4th Grade",
    stream: "Physical Education"
  }
  ];

  return (
    <div className="studentListContainer">
      <h2 className="header">Student List</h2>
      <div className="tableWrapper">
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
            {studentList.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phoneNuber}</td>
                <td>{student.class}</td>
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
