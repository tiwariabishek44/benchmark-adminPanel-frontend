import React from 'react'
import Admin from './Pages/Admin/Admin'
import { Route, Routes } from 'react-router-dom';
import Login from './Components/login/Login'

const App = () => {
  return (
    <div>
      <Routes> 
        {/* login page */}
        <Route path='/' element={<Login />} />
        {/* admin-panel page */}
        <Route path='/admin-panel/*' element={<Admin />} />
      </Routes>
      
    </div>
  )
}

export default App