import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const teacherList = [
    {
      name: "Ms. Jane Doe",
      phoneNuber: "(555) 555-7777",
      email: "jane.doe@example.school.com",
      isVerified: true
    },
    {
      name: "Mr. John Smith",
      phoneNuber: "(555) 555-8888",
      email: "john.smith@example.school.com",
      isVerified: false
    }
  ];

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
    }
  ];

  const courseList = [
    {
      name: "Physics Course",
      stream: "Science",
      class: "11th Grade",
      subject: "Physics",
      price: "$20"
    },
    {
      name: "Math Course",
      stream: "Science",
      class: "10th Grade",
      subject: "Mathematics",
      price: "$15"
    }
  ];

  const teacherCount = teacherList.length;

  const classStudentCount = {};
  studentList.forEach(student => {
    classStudentCount[student.class] = classStudentCount[student.class] ? classStudentCount[student.class] + 1 : 1;
  });

  const classCourseCount = {};
  courseList.forEach(course => {
    classCourseCount[course.class] = classCourseCount[course.class] ? classCourseCount[course.class] + 1 : 1;
  });

  return (
    <div className="dashboard">
      <div className="grid-container">
        <div className="section teachers-section">
          <h2 className="section-title">Teachers</h2>
          <div className="count-box">
            <h3>Total Teachers</h3>
            <p>{teacherCount}</p>
          </div>
        </div>
        
        <div className="section students-section">
          <h2 className="section-title">Students</h2>
          <div className="count-box">
            <h3>Student Count by Class</h3>
            <ul>
              {Object.entries(classStudentCount).map(([className, count]) => (
                <li key={className}>{className}: {count}</li>
              ))}
            </ul>
          </div>
          
        </div>
        
        <div className="section courses-section">
          <h2 className="section-title">Courses</h2>
          <div className="count-box">
            <h3>Total Courses</h3>
            <p>{courseList.length}</p>
          </div>
          <div className="count-box">
            <h3>Course Count by Class</h3>
            <ul>
              {Object.entries(classCourseCount).map(([className, count]) => (
                <li key={className}>{className}: {count}</li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
