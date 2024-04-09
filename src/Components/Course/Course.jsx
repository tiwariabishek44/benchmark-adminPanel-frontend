import React, { useState } from 'react';
import './Courses.css';
import AddCourse from './AddCourse/AddCourse';
import CourseList from './CourseList/CourseList';

const Course = () => {
  const [option, setOption] = useState('list');

  const handler = (val) => {
    setOption(val);
  }

  return (
    <div className='course'>
      <div className="choose">
        <button onClick={() => handler("list")} style={{ backgroundColor: option === "list" ? "orange" : "#E5E8E8" }}>Course List</button>
        <button onClick={() => handler("add")} style={{ backgroundColor: option === "add" ? "orange" : "#E5E8E8" }}>Add Course</button>
      </div>
      {option === 'list' ? (<CourseList />) : (<AddCourse />)}
    </div>
  );
}

export default Course;
