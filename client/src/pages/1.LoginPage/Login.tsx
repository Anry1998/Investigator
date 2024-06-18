import React, {FC, useContext, useState, useRef} from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom"


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form"


interface MyLogin {
    email: string;
    password: string;

}


const LoginPagennn: FC = () => {


   

    
    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        watch,
        formState: { errors, isValid, isDirty },
      } = useForm<MyLogin>({
        defaultValues: {
            email: ' ',
            password: ' '

        }
      })

      const submit: SubmitHandler<MyLogin> = data => {
        console.log(data)
      }

      const error: SubmitErrorHandler<MyLogin> = data => {
        console.log(data)
      }

      const isLogin = () => {
        
        return false
      }
 

    return(
        <Container>
            <Card>
                <Form onSubmit={handleSubmit(submit, error)}>
                    <Form.Control type="text" {...register('email', {required: true})} aria-invalid={errors.email ? true : false}/>
                    <Form.Control type="password" {...register('password')}/>
                    <Button type="submit">Отправить</Button>
                    <Button onClick={() => reset({email: '', password: ''})}>Очистить</Button>
                </Form>
            </Card>
            
        </Container>
        
    )
}

export default observer(LoginPagennn) 




