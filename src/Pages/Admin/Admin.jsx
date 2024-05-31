import React from 'react'; // React library import
import './Admin.css'; // CSS styles import
import Sidebar from '../../Components/Sidebar/Sidebar'; // Sidebar component import
import { Routes, Route } from 'react-router-dom'; // Router components import
import StudentList from '../../Components/StudentList/StudentList'; // StudentList component import
import TeacherList from '../../Components/TeacherList/TeacherList'; // TeacherList component import
import Dashboard from '../../Components/Dashbord/Dashbord'; // Dashboard component import
import Note from '../../Components/Note/Note'; // Note component import
import Course from './../../Components/Course/Course'; // Course component import
import Mcq from './../../Components/Mcq/Mcq'; // Mcq component import
import Ecommerce from '../../Components/Ecommerce/Ecommerce'; // Ecommerce component import
import AddNote from '../../Components/Course/Note/AddNote/AddNote'; // AddNote component import
import Manual from '../../Components/ManualManagement/CourseList/Manual';
import AddManual from '../../Components/ManualManagement/AddManual/AddManual';
import TeacherSubjectList from '../../Components/TeacherList/ManageSubjects/TeacherSubjectList';

const Admin = () => { // Admin functional component
  return (
    <div className='admin'> {/* Admin container */}
      <Sidebar /> {/* Sidebar component */}
      <Routes> {/* Router components */}
        <Route path='/dashboard' element={<Dashboard />} /> {/* Dashboard route */}
        <Route path='/course' element={<Course />} /> {/* Course route */}
        <Route path='/note' element={<Note />} /> {/* Note route */}
        <Route path='/mcq' element={<Mcq />} /> {/* Mcq route */}
        <Route path='/ecommerce' element={<Ecommerce />} /> {/* Ecommerce route */}
        <Route path='/studentList' element={<StudentList />} /> {/* StudentList route */}
        <Route path='/teacherList' element={<TeacherList />} /> {/* TeacherList route */}
        <Route path='/add-note/:courseId' element={<AddNote />} /> {/* AddNote route */}

        <Route path='/teacher/manage-subject/:email' element={<TeacherSubjectList />} /> {/* AddNote route */}
  
        <Route path='/add-manual/:courseId' element={<AddManual />} /> {/* AddNote route */}
        <Route path='/manual' element={<Manual />} /> {/* AddNote route */}
      </Routes>
    </div>
  );
};

export default Admin; // Export Admin component
