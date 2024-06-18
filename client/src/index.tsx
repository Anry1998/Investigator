import React, { createContext }  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Store  from './store/store';
import DataTime from './store/datatime';
import PersonalInformation from './store/personalInformation';
import StatmentStore from './store/statment';

import { BrowserRouter as Router } from 'react-router-dom';



interface DataTimeState {
  statement: DataTime
}

const datatime = new DataTime()



interface PersonalInformationState {
  personalInformation: PersonalInformation
}

const  personalinformation = new PersonalInformation()

const  statmentStore = new StatmentStore ()



interface State {
  store: Store
}



const store = new Store()

export const Context = createContext({
  store,
  datatime,
  personalinformation,
  statmentStore
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <Context.Provider value={{
    store,
    datatime,
    personalinformation,
    statmentStore
  }}>
    <Router>
      <App />
    </Router>
 
  </Context.Provider>
);


