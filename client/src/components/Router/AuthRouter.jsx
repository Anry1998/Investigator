import React, {FC, useContext, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate  } from 'react-router-dom';

// import PersonalInformation from '../PersonalInformation/personalInformation'
import MainPage from "../MainPage";
import InformationPage from "../../pages/4.InformationPage/InformationPage";

import Statement from "../../pages/StatementPage/Statement";
import StatementTheft from "../../pages/StatementPage/StatementTheft/StatementTheft";
import StatementFraud from "../../pages/StatementPage/StatementFraud/StatementFraud";
import ApplicantPage from "../../pages/5.ApplicantPage/ApplicantPage";


import Footer from "../footer/footer";



import InvestigatorPage from "../../pages/InvestigatorPage/InvestigatorPage";


import '../../App.scss'

import { Context } from "../../index";



const AuthRouter = () => {

    const navigate = useNavigate()

    const {store} = useContext(Context)
    const [btnState, setBtnState] = useState(false)

    const handleClick = () => {
        setBtnState(btnState => !btnState)
    }

    let toggleClassCheck = btnState ? 'active' : null
    let toggleClassLock = btnState ? 'lock' : null

    const removeActive = () => {
        setBtnState(btnState => false)
    }

    const activLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    const logout = () => {
        store.logout()
        navigateLogin()
        
    }

    const navigateLogin = () => {
        navigate('/')
       }
    
    return (
        <div>
            
                <div className= {`wrapper ${toggleClassLock}`}>
                    
                    <main className="main">
                        <div className="container">
                            <Routes>
                                <Route path='/' element={<MainPage/>}></Route>
                                <Route path='/personalinformation' element={<InformationPage/>}></Route>
                                <Route path='/statement' element={<Statement/>}></Route>
                                <Route path='/statement/theft' element={<StatementTheft/>}></Route>
                                <Route path='/statement/fraud' element={<StatementFraud/>}></Route>
                                <Route path='/investigatorPage' element={<InvestigatorPage/>}></Route>
                                <Route path='/getuserapplicant/:id' element={<ApplicantPage/>}></Route>
                            </Routes>                            
                        </div>
                        
                    </main>
                    <footer className="footer">
                        <div className="container">
                            <Footer/>
                        </div>
                        
                    </footer>
                </div>   
            
        </div>
        
    )
    
}

export default AuthRouter