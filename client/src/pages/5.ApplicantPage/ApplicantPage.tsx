import React, {FC, useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { Context } from "../../index";
import { data } from "jquery";

import GetApplicantsService from "../../servises/GetApplicantsService";
import { IPersonalInformation } from "../..//models/IPersonalInformation";
import {useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button';



const ApplicantPage: FC = () => {


    const [applicantId, setApplicantId] = useState<IPersonalInformation>()
    const {id} = useParams()

    const history = useNavigate()

    const navigateStatement = () => {
        history('/investigatorPage')
      }

    useEffect(()=> {
        const fetchData = async () => {
            GetApplicantsService.fetchUserApplicantsId(`${id}`).then(res => setApplicantId(res.data))
        }
        fetchData()
      }, [])
    
    return(
        <div>
            <div>
                <div>{applicantId?.lastName}</div>
                <div>{applicantId?.name}</div>
                <div>{applicantId?.patronymic}</div>
                <div>{applicantId?.dateOfBirth}</div>
            </div>
            <Button onClick={navigateStatement}>Назад</Button> 
        </div> 
            
    )
}

export default ApplicantPage