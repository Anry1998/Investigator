import React, {FC, useContext, useState, useRef} from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import {useNavigate, NavLink, useLocation } from "react-router-dom"

// import Time from "../Time";


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

import { useForm, SubmitHandler } from "react-hook-form"

// import './RegistarationPage.css'
// import InputPass from "./InputPass/LoginPage";

import '../../App.scss';


// type Inputs = {
//     example: string
//     exampleRequired: string
// }

const RegistrationPage: FC = () => {

    const {store} = useContext(Context)

    const errMessageRegistration =  store.errMessageRegistration

     const navigate = useNavigate()

     const navigateMain = () => {
        navigate('/')
       }
    // const isLogin = location.pathname === '/login'


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
      } = useForm({
         mode: 'onBlur',
        //  reValidateMode: "onSubmit"
        //  defaultValues: { email: "" }
      })

      const onSubmit = (data: any) => {
        store.registration(email, password)
        // .then(res => navigateMain())
        // alert(JSON.stringify(data))
        // reset()
        navigateMain()
      }
    //   console.log({errors, isValid })

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [checkPassword, setCheckPassword] = useState<string>('')

    const [showPassword, setShowPassword] = useState(false);
    const [showCheckPassword, setShowCheckPassword] = useState(false);

    // const [ errMessage, setErrMessage] = useState<any>('')
    // const [ errPassMessage, setErrPassMessage] = useState<string>('')

   

        // const storeRegistration = async () => {
        //     await store.registration(email, password)
        //     setErrPassMessage( await store.registration(email, password))    
        //     console.log(errPassMessage)    
        //     setEmail('')
        //     setPassword('')

        //     await navigateMain()
            
        // }

    return(
        <div  className="App">
            <Container  className='card__flex '>
                <Card className="card__margin color_grey max__card_width box-shadow-card" style={{position: 'relative', top: '25vh', background: '#C0C0C0'}}>
                    <h1 style={{textAlign: "center"}}>Регистрация</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Введите Email</Form.Label>
                                <Form.Control 
                                    {...register('email', {
                                        required: 'Поле обязательно к заполнению',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Введенное значение не соответствует формату электронной почты",
                                        },  
                                    })}
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} 
                                    type="text" 
                                    placeholder="Введите Email" 
                                    autoComplete="new-password"/>  


                                {errors.email && <p style={{color: 'red'}}>{errors?.email?.message?.toString()}</p>}
                                {errMessageRegistration && <p style={{color: 'red'}}>{errMessageRegistration}</p>}

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Введите пароль</Form.Label>

                                <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
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
                                        id="2"  
                                        autoComplete="new-password"
                                    />

                                    <i onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', top: '32%', right: '8px'}}  className={`fa  fa-eye ${!showPassword || 'fa-eye-slash'}`} id="togglePassword"></i>

                                </div>


                                {errors.password && <p style={{color: 'red'}}>{errors?.password?.message?.toString()}</p>}

                         </Form.Group> 

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Повторите пароль</Form.Label>
                            <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
                                <Form.Control 
                                    {...register('checkPassword', {
                                        // Поле обязательно для заполнения
                                        required: 'Поле обязательно к заполнению',
                                        validate: (val: string) => {
                                            if (watch('password') != val) {
                                                return 'Пароли не совпадают'
                                            }
                                        }
        
                                    })}
                                    value={checkPassword}
                                    onChange={e => setCheckPassword(e.target.value)}
                                    placeholder="Повторите пароль" 
                                    type={showCheckPassword? 'text' : 'password'}
                                    autoComplete="new-password"
                                    />

                                <i onClick={() => setShowCheckPassword(!showCheckPassword)} style={{position: 'absolute', top: '32%', right: '8px'}}  className={`fa  fa-eye ${!showCheckPassword || 'fa-eye-slash'}`} id="togglePassword"></i>
                                
                            </div>


                            {errors.checkPassword && <p style={{color: 'red'}}>{errors?.checkPassword?.message?.toString()}</p>}

                        </Form.Group>

                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Button type="submit"  variant="primary">Зарегистрироваться</Button>{' '}
                            <div> Есть аккаунт?<NavLink to={'/'}>Войдите</NavLink></div>
                        </div>
                       
                        
                        
                       
                        

                    
                    </Form>
                </Card>

                
            </Container>

        </div>
    )
}

export default observer(RegistrationPage) 



