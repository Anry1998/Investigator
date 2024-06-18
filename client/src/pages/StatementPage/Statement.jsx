import React, {FC, useContext, useState} from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useLocation  } from 'react-router-dom';



import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Row} from 'react-bootstrap';

import { useForm, SubmitHandler } from "react-hook-form"

import './Statement.scss'



import Tab from "../../components/Tabs/Tabs";






const Statement = () => {

   
    return(
        <div>
            
            <button><NavLink to='/statement/theft'>Кража</NavLink></button>
            <button><NavLink to='/statement/fraud'>Мошенничество</NavLink></button>
            {/* <Tab/> */}
            
        </div>
    )
}

export default Statement