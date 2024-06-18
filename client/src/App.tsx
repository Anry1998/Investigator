import React, {FC, useContext, useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './App.scss'

import { Context } from '.';
import { observer } from 'mobx-react-lite';
import { IUser } from './models/IUser';


import AppRouter from './components/AppRouter';

import PublicRouter from './components/Router/PublicRouter';

import NavbarMain from './components/NavbarMain/NavbarMain';
import Footer from './components/footer/footer';
import AuthRouter from './components/Router/AuthRouter';


import Time from './components/Time';

import './App.scss'




const App: FC = () => {

  const {store} = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])
 
  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])


  if(store.isLoading) {
    return <div>Загрузка...</div>
  }

  if (!store.isAuth) {
    return (
      <div>
        <PublicRouter/>
      </div>
    )
  } else {
    return (
      <div>
        <NavbarMain/>
        <AuthRouter/>
        <Footer/>
      </div>
    )
  }

}
export default observer (App);
