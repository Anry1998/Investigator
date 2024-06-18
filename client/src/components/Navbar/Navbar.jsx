import React, {FC, useContext, useState} from "react";
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import MainPage from "../MainPage";
import PersonalInformation from "../PersonalInformation/personalInformation";


import './Navbar.scss'

const NavBar = () => {
    
   
    return(
        <>
        nav
        </>

        // <nav>
        //     <ul>
        //         <li>
        //             <NavLink to='/'>Home</NavLink>
        //             <NavLink to='/'>Personal</NavLink>
        //         </li>
        //     </ul>
        // </nav>
        // <div>

        //     <Router>
        //             <nav style={{backgroundColor: 'red'}}>
        //                 <li><Link to='/'>MainPage</Link></li>
        //                 <li><Link to='/personalinformation'>PersonalInformation</Link></li>
        //             </nav>

        //         {/* <Routes>
        //             <Route path='/' element={<MainPage/>}></Route>
        //             <Route path='/personalinformation' element={<PersonalInformation/>}></Route>
        //         </Routes> */}
        //     </Router>


        // </div>
        
        
           
      
        
    )
}

export default NavBar