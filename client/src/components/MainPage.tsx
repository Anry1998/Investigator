import React, {FC, useContext, useState, useEffect} from "react";
import { Context } from "..";

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import { IUser } from '../models/IUser';
import { IPersonalInformation } from '../models/IPersonalInformation';
import UserService from '../servises/UserService';


// import Container from 'react-bootstrap/Container';


import Time from "./Time";

import MySelect from "./MySelect/MySelect";

// import '../../src/App.css'
// import Expirement from "./Expirement";
// import PersonalInformation from "./PersonalInformation/personalInformation";

const MainPage: FC = () => {

  const {store, personalinformation} = useContext(Context)
  const userid = store.user.id
  const useridString = userid.toString()




  useEffect(()=> {
    const fetchData = async () => {
      let data = await personalinformation.fetchUserApplicants(useridString); 
    }
    fetchData()
    // .then(res => setApplicantName(personalinformation.userApplicant.name))
    // .then(res => setApplicantPatronymic(personalinformation.userApplicant.patronymic))
    // .then(res => setApplicantPassport(personalinformation.userApplicant.passport)) 
  })

  


    // const {store, personalinformation} = useContext(Context)
    const [applicantName, setApplicantName] = useState<string>()
    const [applicantPatronymic, setApplicantPatronymic] = useState<string>()
    // const [applicantPassport, setApplicantPassport] = useState<string>()
    const [users, setUsers] = useState<IUser[]>([])

    async function getUsers() {
        try {
          const response = await UserService.fetchUsers()
          setUsers(response.data)
        } catch (e) {
          console.log(e)
        }
      }

    return(
      
    <div>
      {/* <h1> Здравствуйте {personalinformation.userApplicant.name} {personalinformation.userApplicant.patronymic}!</h1> */}

      {/* <h1>{store.isAuth ? 'Пользователь авторизован' : 'Пользователь не авторизован'}</h1>
      <h1>{store.user.isActivated ? 'Аккаунт подтвержден' : 'Подтвердите аккаунт'}</h1> */}

      {store.user.isVerified === 'No' &&
        <div> Для возможности подавать заявления онлайн вам необходипо указать свой личные данные и пройти аторизацию по ссылке - <NavLink to='/personalinformation'>Личная информация</NavLink></div>

      }
      {store.user.isVerified === 'Pending' &&
        <div>Для подтверждения вашей личности, вам необходимо пройти в ОМВД Росссии по г. Анапе, при себе необходимо иметь документ удостоверяющий личность</div>
      }

                        
      <div> {store.user.role === 'USER' &&
          <button onClick={getUsers}>Получить список пользователей</button>}       
      </div>

         {users.map(user => 
          <div key={user.id}>{user.email}</div>
          )}


      {/* <div> Личная информация<NavLink to={'/personalinformation'}>Посмотреть?</NavLink></div> */}

      <Time/>
      {/* <MySelect/> */}

      <div>
        <div>Чат</div>
        <div style={{height: '600px', width: '300px', border: '1px solid #000000'}}>

        </div>
      </div>
                
    </div>
      
        
    )
}

export default MainPage