import React, { useContext, useState } from 'react'
import { authRoutes, publicRoutes, adminRoutes } from '../routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Shop from '../pages/Shop'
import { Context } from '../index';


import { IUser } from '../models/IUser';
import UserService from '../servises/UserService';

const AppRouter = () => {

  const {store} = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])


  async function getUsers() {
    try {
      const response = await UserService.fetchUsers()
      setUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }



  // const {user} = useContext(Context)
  // console.log(user)


  
  return (
    <>
      <div>rererer</div>
        <Routes>
          

          {/* {
            <h1>{store.isAuth ? 'Пользователь авторизован' : 'Пользователь не авторизован'}</h1>
          } */}
          
            {store.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} />
              )}

            {/* {user.role === 'USER' && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} exact/>
                )} */}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component}/>
              )}


            {/* <Route path='*' element={<Shop/>}/> */}

            {/* Redirect to */}
          
    
              
        </Routes>
          
      
    </>
  );
}

export default AppRouter;