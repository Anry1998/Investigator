import React, {FC, useContext, useState, useEffect} from "react";
import { forwardRef, useImperativeHandle } from "react";

import StatementService from '../../../servises/StatementService';

import { useForm, SubmitHandler } from "react-hook-form"

import { Context } from "../../../index";


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';



const TabTime = (props, ref) => {

  const {store, statmentStore} = useContext(Context)
  
  const {
    register, 
    handleSubmit,
    formState: {errors}
  } = useForm({
    mode: 'onBlur',
 })


 const checkfilledInputs = () => {
  if (!date || !time) {
    statmentStore.setTabTime('Раздел TabTime не заполнен')
  }
}

  const onSubmit = (data) => {
    if (date && time) {
      async function sendStatement() {
        try {
          const responseTime = await StatementService.sendStatementTime(statmentStore.statmentId, date, time)
        } catch (e) {
          console.log(e)
        }
      }
      sendStatement()
      setDate('')
      setTime('')
      statmentStore.setTabTime('start')
    } 
  }

  useImperativeHandle(ref, () => ({ onSubmit, checkfilledInputs}));


  const [date, setDate] = useState('')
  const [time, setTime] = useState('')


  const removeFormLabelRed = (e) => {
    if (e.target.value !== '') {
      e.target.classList.remove('form__label-red')
    } 
  }

  const changeInput = (e, setInput) => {
    setInput(e.target.value)
    removeFormLabelRed(e)

    if (date && time) {
      statmentStore.setTabTime('')
    }
  }

  useEffect(()=> {
    console.log(statmentStore.tabTime)
    if (date && time) {
      statmentStore.setTabTime('')
    }

  }, [date, time])

  return (
    
    <Card className=" card__margin color_grey max__card_width card__smoll">
      <h1 style={{textAlign: "center"}}>Время</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
            <Form.Label>Введите Дату</Form.Label>
            <Form.Control 
              {...register('date', {
                required: 'Поле обязательно к заполнению',
              })}
              value={date} 
              onChange={e =>  changeInput(e, setDate)}
              type="text" 
              autoComplete="new-password"
              className= {statmentStore.tabTime && statmentStore.tabTime !=='start' && !date && "form__label-red"}
              placeholder="Введите дату совершения преступления" />
            

              <div style={{color: 'red'}}>
                {errors?.date && !date &&
                <p>{errors?.date?.message?.toString()}</p>   
                }
              </div>
          </Form.Group>

          <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1" style={{height: '90px'}}>
            <Form.Label>Введите Время</Form.Label>
            <Form.Control 
              {...register('time', {
                // Поле обязательно для заполнения
                required: 'Поле обязательно к заполнению',
                  
              })}
              value={time} 
              onChange={e =>  changeInput(e, setTime)} 
              type="text" 
              autoComplete="new-password"
              className= {statmentStore.tabTime && statmentStore.tabTime !=='start' && !time && "form__label-red"}
              placeholder="Введите время совершения преступления" />
            

              <div style={{color: 'red'}}>
                {errors?.time && !time &&
                <p>{errors?.time?.message?.toString()}</p>   
                }
              </div>
          </Form.Group>
        </Form>
    </Card> 

    

  );
};

export default forwardRef(TabTime);