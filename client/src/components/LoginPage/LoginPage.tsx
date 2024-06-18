import React, {FC, useContext, useState, useRef} from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom"


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

import { useForm, SubmitHandler } from "react-hook-form"

// import './LoginPage..css'


const LoginPage: FC = () => {


    const {store} = useContext(Context)
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
      } = useForm({
         mode: 'onBlur',
      })
      const onSubmit = (data: any) => {

      }
 

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState(false);


    const [ errMessage, setErrMessage] = useState<any>('')
    const [ errPassMessage, seterrPassMessage] = useState<string>('')

    
    const storeLogin = async () => {
        store.login(email, password)
        setErrMessage(await store.login(email, password)) 
        console.log(errMessage)
        setEmail('')
        setPassword('')
    }


    return(
        <div  >
            <Container  >
                <Card >
                    <h1 style={{textAlign: "center"}}>Авторизация</h1>
                      {/* Вызываем хук handleSubmit */}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{height: '90px'}}>
                                <Form.Label>Введите Email</Form.Label>
                                <Form.Control 
                                    {...register('email', {
                                        // Поле обязательно для заполнения
                                        required: 'Поле обязательно к заполнению',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Введенное значение не соответствует формату электронной почты",
                                        },  
                                    })}
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} 
                                    type="text" 
                                    placeholder="Введите Email" />
                                
                                <div  style={{color: 'red'}}>
                                    {errors?.email ? 
                                        <p>{errors?.email?.message?.toString()}</p> 
                                        :
                                        ((errMessage !== 'Неверный пароль') && (errMessage ? errMessage :errPassMessage )) }
                                 </div>

                        </Form.Group>

                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1" style={{height: '90px'}}>
                            <Form.Label>Введите пароль</Form.Label>
        
                            <Form.Control 
                                
                                {...register('password', {
                                    required: 'Поле обязательно к заполнению',
                                    pattern: {
                                        value:  /((?=.*\d)(?=.*[a-z] || ?=.*[а-я])(?=.*[A-Z] || ?=.*[А-Я])(?=.*[\W]).{5,15})/,
                                        message: "Пароль должен содержать: одну цифру, один символ нижнего регистра, один специальный символ",
                                    },
                                    
                                    minLength: {
                                        value: 5,
                                        message: 'Пароль должен быть не менее 5 символов'
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: 'Пароль должен быть не более 15 символов'
                                    }   
                                })}
                                
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Введите пароль" 
 
                            /> 

                            <i onClick={() => setShowPassword(!showPassword)}  className="fa fa-eye" id="togglePassword"></i>

                            <div style={{color: 'red'}}>
                                {errors?.password ? 
                                    <p>{errors?.password?.message?.toString() || 'Error!'}</p> 
                                    : 
                                    ( (errMessage === 'Неверный пароль') ? errMessage : '')}
                            </div>
                        </Form.Group> 

                        <Button disabled={  !isValid }  onClick={storeLogin} variant="primary">Войти</Button>{' '}
                        <div> Нета аккаунт?<NavLink to={'/registration'}>Зарегистрироваться</NavLink></div>

                        <div> Забыли пароль?<NavLink to={'/reset'}>Восстановить?</NavLink></div>
                    </Form>
                </Card> 
            </Container>

        </div>
    )
}

export default observer(LoginPage) 




