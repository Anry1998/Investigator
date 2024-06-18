import React, {FC, useContext, useState} from "react";
import {Router,  Routes, Route } from 'react-router-dom';
import LoginPage from "../../pages/1.LoginPage/LoginPage";
import LoginPagennn from '../../pages/1.LoginPage/Login'

import RegistrationPage from "../../pages/2.RegistrationPage/RegistrationPage";
// import ResetPass from '../ResetPass';
import ResetPassEmal from '../ResetPassEmal';

// import RegistrationPage from "../RegistrationPage.tsx/RegistrationPage.";

// import PersonalInformation from '../PersonalInformation/personalInformation'
import MainPage from "../MainPage";



const PublicRouter = () => {
    
  return (  
    // <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path='/login' element={<LoginPagennn/>}></Route>
        <Route path='/registration' element={<RegistrationPage/>}></Route>
        {/* <Route path='/reset' element={<ResetPass/>}></Route>  */}
      </Routes> 
    // </Router>  
      
  )
    
}

export default PublicRouter