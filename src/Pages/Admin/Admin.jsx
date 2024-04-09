import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import StudentList from '../../Components/StudentList/StudentList'
import TeacherList from '../../Components/TeacherList/TeacherList'
import Dashboard from '../../Components/Dashbord/Dashbord'
import Note from '../../Components/Note/Note'
import Course from './../../Components/Course/Course';
import Mcq from './../../Components/Mcq/Mcq';
import Ecommerce from '../../Components/Ecommerce/Ecommerce'
import AddNote from '../../Components/Course/Note/AddNote/AddNote'




const Admin = () => {
  return (
    <div className='admin' >
      <Sidebar />
      <Routes >
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/course' element={<Course />} />
        <Route path='/note' element={<Note />} />
        <Route path='/mcq' element={<Mcq />} />
        <Route path='/ecommerce' element={<Ecommerce />} />
        <Route path='/studentList' element={<StudentList />} />
        <Route path='/teacherList' element={<TeacherList />} />
        <Route path='/add-note/:courseId' element={<AddNote />} />
      </Routes>

    </div>
  )
}

export default Admin