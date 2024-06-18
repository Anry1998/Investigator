import React, {FC, useContext, useState, useEffect} from "react";
import { forwardRef, useImperativeHandle } from "react";

import StatementService from '../../../servises/StatementService';

import { useForm, SubmitHandler } from "react-hook-form"

import { Context } from "../../../index";


import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
 



const TabName = (props, ref ) => {

  const {store, statmentStore} = useContext(Context)

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
       mode: 'onBlur',
    })

    const checkfilledInputs = () => {
      if (!lastName ) {
        statmentStore.setTabName('Раздел TabName не заполнен')
      }
    }

    const onSubmit = (data) => {
      if (lastName ) {
        async function sendStatement() {
          try {
            const responseName = await StatementService.sendStatementName(statmentStore.statmentId, gender, lastName)
          } catch (e) {
            console.log(e)
          }
        }
        sendStatement()
        setLastName('')
        statmentStore.setTabName('start')
      } 
    }

    useImperativeHandle(ref, () => ({ onSubmit, checkfilledInputs  }));

    const [gender, setGender] = useState('Мужской')
    const [lastName, setLastName] = useState('')
 
    // const [name, setName] = useState('')
    
    function changeCheckbox(e,  setCheckbox) {
      setCheckbox(e.target.value)
    }


    const removeFormLabelRed = (e) => {
      if (e.target.value !== '') {
        e.target.classList.remove('form__label-red')
      } 
    }
    
    const changeInput = (e, setInput) => {
      setInput(e.target.value)
      removeFormLabelRed(e)
      //  Если все импуты заполнены, то все tabName делаем пустым
      if (lastName ) {
        statmentStore.setTabName('')
      } 
    }

    useEffect(()=> {
      console.log(statmentStore.tabName)
      if (lastName ) {
        statmentStore.setTabName('')
      }
      console.log(lastName)
      console.log(statmentStore.tabName)
    }, [lastName])

  return(
      
      <Container  className='card__flex '> 
      
          <Card className="card__margin color_grey max__card_width card__smoll">
                  <h1 style={{textAlign: "center"}}>Информация о пользователе</h1>


                  <Form onSubmit={handleSubmit(onSubmit)}>

                      <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                          <Form.Label>Укажите ваш пол</Form.Label>
                          <Form.Select aria-label="Default select example"
                            onChange={(e) => changeCheckbox(e, setGender)}
                          >
                              <option value="Мужской">Мужской</option>
                              <option value="Женский">Женский</option>      
                          </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                              <Form.Label>Фамилия</Form.Label>
                              <Form.Control 
                                  {...register('lastName', {
                                      required: 'Поле обязательно к заполнению',
                                  })}
                                  value={lastName} 
                                  onChange={e =>  changeInput(e, setLastName)} 
                                  type="text" 
                                  placeholder="Введите вашу фамилию" 
                                  autoComplete="new-password"
                                  
                                  className= {statmentStore.tabName && statmentStore.tabName !== 'start'  && !lastName && "form__label-red"} 
                                  />

                              <div className="input__div_style">
                                  {errors?.lastName && !lastName &&
                                      <p>{errors?.lastName?.message?.toString()}</p>   
                                  }
                               </div>

                      </Form.Group>

                      {/* <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                              <Form.Label>Имя</Form.Label>
                              <Form.Control 
                                  {...register('name', {
                                      required: 'Поле обязательно к заполнению',
                                  })}
                                  value={name} 
                                  onChange={e => changeInput(e, setName)} 
                                  type="text" 
                                  autoComplete="new-password"
                                  placeholder="Введите вашу фамилию" 
                                  className= {statmentStore.tabName && statmentStore.tabName !== 'start'  &&!name && "form__label-red"} 
                                  ref={refName}/>

                              <div className="input__div_style">
                                  {errors?.name && !name &&
                                      <p>{errors?.name?.message?.toString()}</p>   
                                  }
                               </div>

                      </Form.Group> */}
   
                  </Form>  
          </Card> 

      </Container>
  )
}

export default forwardRef(TabName)