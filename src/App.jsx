import React, { useState } from 'react'
import Admin from './Pages/Admin/Admin'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from './Components/login/Login'
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Components/Modal/Modal';
import { changeErrorMessage } from './Components/redux/slice';
import { getAccessToken } from './utils/tokenUtils';
import { consoleLog } from './utils/helpers';


const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const {pathname} = useLocation();
  const navigate = useNavigate()
  const accessToken = getAccessToken()

  React.useEffect(()=>{
    if(pathname=="/"){
      if(accessToken==null){
        consoleLog("accessToken: null")
      } else{
        console.log("accessToken: "+ accessToken)
        navigate("/admin-panel/");
      }
    } {
      if(accessToken==null){
        navigate('/?message=Session%20has%20expired.%20Please%20login%21')
      } else{
        console.log("accessToken: "+ accessToken)
      }
    }
  },[])

  

  const dispatch = useDispatch()

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    dispatch(changeErrorMessage({errorMessage:null}))
  };

  const errorMessage = useSelector((state) => state.errorReducer.errorMessage);

  React.useEffect(()=>{
    if(errorMessage==null){
      setModalOpen(false)
    }else{
      setModalOpen(true)
    }
  },[errorMessage])


  return (
    <div>
 <Modal isOpen={isModalOpen} onClose={closeModal} message={errorMessage}>
  
      </Modal>
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



