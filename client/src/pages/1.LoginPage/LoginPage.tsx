import React, {FC, useContext, useState, useEffect} from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom"


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form"

// import './LoginPage..css'
import './LoginPage.scss'

interface MyLogin {
    email: string;
    password: string;

}


const LoginPage: FC = () => {
    const {store, personalinformation} = useContext(Context)

    const errMessageLogin =  store.errMessageLogin


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid,  isDirty },
      } = useForm<MyLogin>({
        mode: 'onBlur',
      })

      const submit: SubmitHandler<MyLogin> = (data) => {
        store.login(email, password)
      }

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState(false);


    return(
        <div  className="App" style={{ background: '#C0C0C0'}}>
            
            <Container   className='card__flex' >
                <Card className="card__margin color_grey max__card_width box-shadow-card" style={{position: 'relative', top: '25vh'}}>
                    <h1 style={{textAlign: "center"}}>Вход</h1>
                    <Form onSubmit={handleSubmit(submit)}>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{height: '90px'}}>
                                <Form.Label>Введите Email</Form.Label>
                                <Form.Control 
                                    {...register('email', {
                                        required: 'Поле обязательно к заполнению',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Введенное значение не соответствует формату электронной почты",
                                        },  
                                    })}
                                    
                                    className="input-control"
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} 
                                    type="text" 
                                    placeholder="Введите Email" 
                                    autoComplete="new-password"
                                    />

                                {errors.email && <p style={{color: 'red'}}>{errors?.email?.message?.toString()}</p>}
                                {errMessageLogin ==='Пользователь с таким email не был найден' && <p style={{color: 'red'}}>{errMessageLogin}</p>}

                        </Form.Group>

                        <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1" >
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
                                    className="input-control"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Введите пароль" 
                                    autoComplete="new-password"
                                /> 
                                <i onClick={() => setShowPassword(!showPassword)} style={{position: 'absolute', top: '32%', right: '8px'}}  className={`fa  fa-eye ${!showPassword || 'fa-eye-slash'}`} id="togglePassword"></i>
                            </div>
                            

                            {errors.password && <p style={{color: 'red'}}>{errors?.password?.message?.toString()}</p>}
                            {errMessageLogin==='Неверный пароль' && <p style={{color: 'red'}}>{errMessageLogin}</p>}
                        </Form.Group> 

                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Button  type="submit" variant="primary">Войти</Button>{''}
                            <div> Нет аккаунта?<NavLink to={'/registration'}>Зарегистрируйтесь</NavLink></div>
                        </div>

                        

                        <div style={{paddingTop: '5px'}}> Забыли пароль?<NavLink to={'/reset'}>Восстановить</NavLink></div>
                    </Form>
                </Card> 
            </Container>

        </div>
    )
}

export default observer(LoginPage) 




