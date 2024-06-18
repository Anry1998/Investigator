import React, {FC, useContext, useState} from "react";
import {  Link, NavLink, useNavigate  } from 'react-router-dom';

import '../../App.scss'

import { Context } from "../../index";



const NavbarMain = () => {

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
                    <header className="header">
                        <div className="container"> 
                            <div className="header__body">
                                <Link className="header__logo" to='/'>Investigator</Link>
                                <div 
                                    className={`header__burger ${toggleClassCheck}`}
                                    onClick={handleClick}
                                >
                                    <span></span>
                                </div>


                                <nav className={`header__menu ${toggleClassCheck}`}>
                                    <ul className="header__list">
                                        <li ><NavLink to='/' className={({isActive}) => isActive ? activLink : normalLink}  onClick={removeActive}>Главная</NavLink></li>
                                        {/* <li ><NavLink to='/personalinformation' className={({isActive}) => isActive ? activLink : normalLink} onClick={removeActive}>Личная информация</NavLink></li> */}
                                        {/* <li ><NavLink to='/personalinformation' className={({isActive}) => isActive ? activLink : normalLink} onClick={removeActive}>Мои заявления</NavLink></li> */}
                                        <li ><NavLink to='/statement' className={({isActive}) => isActive ? activLink : normalLink} onClick={removeActive}>Подать заявление</NavLink></li>
                                        <button onClick={logout}>Выйти</button>

                                        {store.user.role === 'USER' &&
                                            <li ><NavLink to='/investigatorPage' className={({isActive}) => isActive ? activLink : normalLink} onClick={removeActive}>Функции следователя</NavLink></li>
                                        }
                                    </ul>   
                                </nav>
                            </div> 
                        </div> 
                    </header>
                    
                    
                </div>   
            
        </div>
        
    )
    
}

export default NavbarMain