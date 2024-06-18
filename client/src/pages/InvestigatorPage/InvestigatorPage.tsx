import React, {FC, useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { Context } from "../../index";


import {IPersonalInformation}   from '../../models/IPersonalInformation';
import GetApplicantsService from '../../servises/GetApplicantsService';

import ApplicantPage from "../5.ApplicantPage/ApplicantPage";


import Modal from 'react-modal';



import StatementPrint from "./ProtocolPager/StatementPrint/StatementPrint";
import './InvestigatorPage.scss'

const InvestigatorPage = () => {

  const {store, personalinformation} = useContext(Context)

  useEffect(()=> {
    setApplicants(personalinformation.applicantArr)
  }, [])

  const [applicants, setApplicants] = useState<IPersonalInformation[]>([])



  const [applicantsSearch, setApplicantsSearch] = useState<string>('')


  async function getApplicants() { 
    try {
      await personalinformation.fetchApplicants(applicantsSearch)
      setApplicants(personalinformation.applicantArr)
    } catch (e) {
      console.log(e)
    }
  }


  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => {
    setModalIsOpen(true);
  };
   
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div className="modalContent">
      <StatementPrint />
      <button onClick={closeModal}>Закрыть</button>
    </div>
  );



  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  
  const openModal2 = () => {
        setModalIsOpen2(true);
    };
    
  const closeModal2 = () => {
        setModalIsOpen2(false);
    };

  const modalContent2 = (
            <div style={{marginTop: '170px'}}>
            <h2>Заголовок Объяснение</h2>
            <p>Текст модального окна</p>
            <button onClick={closeModal2}>Закрыть</button>
            </div>
    );

  const history = useNavigate()

    if (store.user.role === 'USER') {
        return (
            <>
                <div>
                    <button onClick={openModal}>Протокол принятия устного заявления</button>
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        {modalContent}
                    </Modal>
                </div>

                <div>
                    <button onClick={openModal2}>Объяснение</button>
                    <Modal isOpen={modalIsOpen2} onRequestClose={closeModal2}>
                        {modalContent2}
                    </Modal>
                </div>
                <br></br>

                <div>
                    <input
                    value={applicantsSearch} 
                    onChange={e => setApplicantsSearch(e.target.value)} 
                    type="text" 
                    placeholder="Введите "/>
                    <button
                      onClick={getApplicants}
                         
                    >Найти пользователя</button>

                </div>

                <br></br>

                <ul className="applicants__list">
                  {applicants.map((applicant) =>
                    <li key={applicant.id} className="applicants__item" 
                      onClick={() => history('/' + 'getuserapplicant' + '/' + applicant.id)}
                        >
                        <div>{applicant.id}</div>      
                        <div>{applicant.name}</div>       
                        <div>{applicant.lastName}</div>       
                        <div>{applicant.patronymic}</div>
                        <div>{applicant.dateOfBirth}</div>
                    </li>)
                  }
                </ul>

            </>
            
          );
    }
    
    
}

export default InvestigatorPage