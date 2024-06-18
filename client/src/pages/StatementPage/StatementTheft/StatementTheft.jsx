import React, { useState, useRef, useContext } from "react";
import { observer } from "mobx-react-lite";
// import "./styles.css";

import { useNavigate  } from 'react-router-dom';
import { Context } from "../../../index";

import StatementService from '../../../servises/StatementService';

import TabName from "../../../components/Tabs/TabsPages/TabsName";
import TabTime from "../../../components/Tabs/TabsPages/TabsTime";
import InformationPage from "../../4.InformationPage/InformationPage";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import GetApplicantsService from "../../../servises/GetApplicantsService";

import './StatementTheft.scss'





// import TabName from "./TabsPages/TabsName";

const StatementTheft = () => {

  const {store, statmentStore, personalinformation} = useContext(Context)
  const userid = store.user.id

  
  const navigate = useNavigate()

  const navigateStatement = () => {
    navigate('/statement')
  }

  const nameComponent = useRef(null)
  const timeComponent = useRef(null)


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  const setBackButton = () => {
    if (toggleState !== 1){
      setToggleState(toggleState-1)
    }

  }

  const setForwardButton = () => {
    if (toggleState !== 5){
      setToggleState(toggleState+1)
    }
    
  }

  const buttonBackGetActiveClass = (className) =>
    toggleState === 1 ? className : "";

  const buttonForwarGetActiveClass = (className) =>
    toggleState === 5 ? className : "";

    const [checkbox, setСheckbox] = useState(true);

    const save =  async () => {

      if (checkbox===true) {
        await timeComponent.current.checkfilledInputs()

        

        if (!statmentStore.tabTime && statmentStore.tabTime !== 'start') {
          const seApplicant = await GetApplicantsService.fetchUserApplicant(localStorage.getItem('id'))
          await statmentStore.getStatmentId(userid)
          await StatementService.sendStatementName(statmentStore.statmentId, seApplicant.data.gender, seApplicant.data.lastName)
          console.log(statmentStore.statmentId)
          
          // .then(res => StatementService.sendStatementName(res.data, seApplicant.data.gender, seApplicant.data.lastName))
          await timeComponent.current.onSubmit()
        }
      }

      if (checkbox===false) {
        await nameComponent.current.checkfilledInputs()
        await timeComponent.current.checkfilledInputs()

        if (!statmentStore.tabName && !statmentStore.tabTime && statmentStore.tabname !== 'start' && statmentStore.tabTime !== 'start') {
          await statmentStore.getStatmentId(userid)
          await nameComponent.current.onSubmit()
          await timeComponent.current.onSubmit()
        }
      }

    };


  return (
    <div className="container">
      <ul className="tab-list">
        <button className={`btnn ${buttonBackGetActiveClass("button__Back__Disabled")}`}
          onClick={setBackButton}>Назад</button>
         
        <li
          // className='background_tab_red' 
          className={`tabs ${checkbox === false && statmentStore.tabName && statmentStore.tabName !== 'start'  &&'background_tab_red'}   ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1)}
          //  style={  { background: '#f29191'}}
          
        >
          Tab 1
        </li>
        <li
          className={`tabs ${ statmentStore.tabTime && statmentStore.tabTime !== 'start' &&'background_tab_red'}   ${getActiveClass(2, "active-tabs")}`}
          // className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </li>
        <li
          className={`tabs ${getActiveClass(3, "active-tabs")}`}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </li>
        <li
          className={`tabs ${getActiveClass(4, "active-tabs")}`}
          onClick={() => toggleTab(4)}
        >
          Tab 4
        </li>
        <li
          className={`tabs ${getActiveClass(5, "active-tabs")}`}
          onClick={() => toggleTab(5)}
        >
          Tab 5
        </li>

        <button 
          className={`btnn ${buttonForwarGetActiveClass("button__Back__Disabled")}`}
          onClick={setForwardButton}>Вперед</button>
        
      </ul>


      <div className="content-container">

      <button onClick={save}>Save</button>
      

        <div className={`content-container-padding content-container-div ${getActiveClass(1, "content-container-div--active")}`}>
          <div>В данном разделе вам необходимо ввести сведения о лице, которое выступает субъектом противопровного дееяния</div>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Я являюсь субъектом противоправного деяния" checked={checkbox} onChange={() => setСheckbox(!checkbox)}/> 
          </Form.Group>

          {
            checkbox === false && <TabName ref={nameComponent}/>
          }
          

         
        </div>


        <div   className={`content-container-div ${getActiveClass(2, "content-container-div--active")}`}>
          <TabTime ref={timeComponent}/>
        </div>

        <div   className={`content-container-div ${getActiveClass(3, "content-container-div--active")}`}>
          <TabName/>
        </div>
        <div   className={`content-container-div ${getActiveClass(4, "content-container-div--active")}`}>
          <TabName/>
        </div>
        <div   className={`content-container-div ${getActiveClass(5, "content-container-div--active")}`}>
          <TabName/>
        </div>

      </div>

      <Button onClick={navigateStatement}>Назад</Button>
    </div>
  );
};

export default observer(StatementTheft);