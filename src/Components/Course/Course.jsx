import React, { useState } from 'react';
import './Courses.css'; // Importing CSS file for styling
import AddCourse from './AddCourse/AddCourse'; // Importing AddCourse component
import CourseList from './CourseList/CourseList'; // Importing CourseList component

const Course = () => {
  const [option, setOption] = useState('list'); // State hook to manage selected option ('list' or 'add')

  // Function to handle button click and update selected option
  const handler = (val) => {
    setOption(val);
  }

  return (
    <div className='course'> {/* Main container for the Course component */}
      <div className="choose"> {/* Container for selecting course list or add course */}
        {/* Button to display Course List */}
        <button onClick={() => handler("list")} style={{ backgroundColor: option === "list" ? "orange" : "#E5E8E8" }}>
          Course List
        </button>
        {/* Button to display Add Course form */}
        <button onClick={() => handler("add")} style={{ backgroundColor: option === "add" ? "orange" : "#E5E8E8" }}>
          Add Course
        </button>
      </div>
      {/* Conditional rendering based on selected option */}
      {option === 'list' ? (<CourseList />) : (<AddCourse />)}
    </div>
  );
}

export default Course;