import React, {FC, useContext, useState, useEffect} from "react";

import {Context} from '../../index'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Row} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { useForm, SubmitHandler } from "react-hook-form"

import { observer } from 'mobx-react-lite';


// import ReactDOM from 'react-dom';
// import $ from 'jquery';

import './InformationPage.scss'

import InputSelect from "../../components/InputSelectClass";

import InputSelectFunction from "../../components/InputSelect";




const InformationPage: FC = () => {

    const {store, personalinformation} = useContext(Context)
    const userid = store.user.id

    // const useridString = userid.toString()
    
    // useEffect(()=> {
    //     const fetchData = async () => {
    //         let data = await personalinformation.(useridString);
            
    //     }
    //     fetchData()
    //     console.log(personalinformation.userApplicant.name)
    // })
    

    const sendInfo = async () => {
        personalinformation.sendInfo(userid, gender, lastName, name, patronymic, dateOfBirth, placeOfBirth, placeOfRegistration, 
            placeOfResidence, phone, citizenship, education, maritalStatus, placeOfWork, militaryDuty, criminalRecord, passport, otherData)
            handleClose()
            console.log('sendInfo')
    }
    

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


      // Modal

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

  


      // Input state

      const [gender, setGender] = useState<string>('Мужской')
      
      //1+
      const [lastName, setLastName] = useState<string>('')
      // 2+
      const [name, setName] = useState<string>('')
      // 3+
      const [patronymic, setPatronymic] = useState<string>('')
      // 4+
      const [dateOfBirth, setDateOfBirth] = useState<string>('')
      // 5+
      const [placeOfBirth, setPlaceOfBirth] = useState<string>('')

      const [placeOfRegistration, setPlaceOfRegistration] = useState<string>('')

    //   const [placeOfResidenceCheckbox, setPlaceOfResidenceCheckbox] = useState<boolean>(true)
      


      const [placeOfResidence, setPlaceOfResidence] = useState<string>(placeOfRegistration)
      
      const [phone, setPhone] = useState<string>('')
      const [passport, setPassport] = useState<string>('Паспорт')
      
      const [otherData, setOtherData] = useState<string>('')
      


      // Select state
    //   const [gender, setGender] = useState<string>('Жен')
      const [citizenship, setCitizenship] = useState<string>('Российская Федерация')
      const [education, setEducation] = useState<string>('Высшее')
      const [maritalStatus, setMaritalStatus] = useState<string>('Женат (Замужем)')
      const [havingChildren, setHavingChildren] = useState<string>('На иждивении один несовершеннолетний ребенок')

      const [placeOfWork, setPlaceOfWork] = useState<string>('Официально не трудоустроен')
      const [militaryDuty, setMilitaryDuty] = useState<string>('Военнообязанный')
      const [criminalRecord, setCriminalRecord] = useState<string>('Не судим')

      
    //   // Err state
    //   const [ errMessagelastName, setErrMessagelastName] = useState<string>('')
    //   const [ errPassMessage, seterrPassMessage] = useState<string>('')

    

      // Select set state function

      function handleAddrTypeChange(e: any,  setState: Function) {
        setState(e.target.value)
      }
 
    
    return(
        
        <Container  className='card__flex '>
            <Card className="card__margin color_grey max__card_width card__smoll">
                    <h1 style={{textAlign: "center"}}>Информация о пользователе</h1>
                    {/* <div>{errMessage}</div> */}
                      {/* Вызываем хук handleSubmit */}
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                            <Form.Label>Укажите ваш пол</Form.Label>
                            <Form.Select aria-label="Default select example"
                                id="select-1"
                                onChange={(e) => handleAddrTypeChange(e, setGender)}
                            >
                                <option value="Мужской">Мужской</option>
                                <option value="Женский">Женский</option>      
                            </Form.Select>
                        </Form.Group>

                         {/* lastName */}
                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control 
                                    {...register('lastName', {
                                        // Поле обязательно для заполнения
                                        required: 'Поле обязательно к заполнению очень',
                                        // pattern: {
                                        //     value: /\S+@\S+\.\S+/,
                                        //     message: "Введенное значение не соответствует формату электронной почты",
                                        // },  
                                    })}
                                    value={lastName} 
                                    onChange={e => setLastName(e.target.value)} 
                                    type="text" 
                                    placeholder="Введите вашу фамилию" />

                                <div className="input__div_style">
                                    {errors?.lastName && 
                                        <p>{errors?.lastName?.message?.toString()}</p>   
                                    }
                                 </div>

                        </Form.Group>
                        {/* name */}
                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control 
                                    {...register('name', {
                                        // Поле обязательно для заполнения
                                        required: 'Поле обязательно к заполнению !',  
                                    })}
                                    value={name} 
                                    onChange={e => setName(e.target.value)} 
                                    type="text" 
                                    placeholder="Введите ваше имя" />

                                
                                <div  className="input__div_style">
                                    {errors?.name &&
                                        <p>{errors?.name?.message?.toString()}</p> 
                                         }
                                 </div>

                        </Form.Group>
                        {/* patronymic */}
                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1" >
                                <Form.Label>Отчество</Form.Label>
                                <Form.Control 
                                    {...register('patronymic')}
                                    value={patronymic} 
                                    onChange={e => setPatronymic(e.target.value)} 
                                    type="text" 
                                    placeholder="Введите ваше отчество" />
                        </Form.Group>
                        {/* dateOfBirth */}
                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                                <Form.Label>Дата рождения</Form.Label>
                                <Form.Control 
                                    {...register('dateOfBirth', {
                                        required: 'Поле обязательно к заполнению !',  
                                    })}
                                    value={dateOfBirth} 
                                    onChange={e => setDateOfBirth(e.target.value)} 
                                    type="date" 
                                    placeholder="Введите ваше имя" />
                                
                                <div  className="input__div_style">
                                    {errors?.dateOfBirth && <p>{errors?.dateOfBirth?.message?.toString()}</p>}
                                 </div>

                        </Form.Group>
                        {/* placeOfBirth */}
                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                                <Form.Label>Место рождения</Form.Label>
                                <Form.Control 
                                    {...register('placeOfBirth', {
                                        required: 'Поле обязательно к заполнению !',  
                                    })}
                                    value={placeOfBirth} 
                                    onChange={e => setPlaceOfBirth(e.target.value)} 
                                    type="text" 
                                    placeholder="Укажите место вашего рождения" />
                                
                                <div  className="input__div_style">
                                    {errors?.placeOfBirth && <p>{errors?.placeOfBirth?.message?.toString()}</p>}
                                 </div>
                        </Form.Group>
                        {/* placeOfBirth */}
                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                                <Form.Label>Место регистрации</Form.Label>
                                <Form.Control 
                                    {...register('placeOfRegistration', {
                                        required: 'Поле обязательно к заполнению !',  
                                    })}
                                    value={placeOfRegistration} 
                                    onChange={e => setPlaceOfRegistration(e.target.value)} 
                                    type="text" 
                                    placeholder="Укажите место вашей регистрации" />
                                
                                <div  className="input__div_style">
                                    {errors?.placeOfRegistration && <p>{errors?.placeOfRegistration?.message?.toString()}</p>}
                                 </div>
                        </Form.Group>

                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                            <Form.Label>Место проживания</Form.Label>
                            <Form.Control 
                                {...register('placeOfResidence', {
                                    required: 'Поле обязательно к заполнению !',  
                                })}
                                value={placeOfResidence} 
                                onChange={e => setPlaceOfResidence(e.target.value)} 
                                type="text" 
                                placeholder="Укажите место вашего фактического проживания" />
                            
                            <div  className="input__div_style">
                                {errors?.placeOfResidence && <p>{errors?.placeOfResidence?.message?.toString()}</p>}
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                            <Form.Label>Гражданство</Form.Label>
                            <Form.Control 
                                {...register('citizenship', {
                                    required: 'Поле обязательно к заполнению !',  
                                })}
                                value={citizenship} 
                                onChange={e => setCitizenship(e.target.value)} 
                                type="text" 
                                placeholder="Укажите ваше гражданство" />
                            
                            <div  className="input__div_style">
                                {errors?.citizenship && <p>{errors?.citizenship?.message?.toString()}</p>}
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                            <Form.Label> Ваше образование</Form.Label>
                            <Form.Select 
                                aria-label="Default select example"
                                onChange={ (e) => handleAddrTypeChange(e, setEducation)}
                            >
                                <option value="Высшее">Высшее</option>
                                <option value="Среднее">Среднее</option>
                                <option value="Основное общее">Основное общее</option>
                                
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control 
                                {...register('phone', {
                                    required: 'Поле обязательно к заполнению !',  
                                })}
                                value={phone} 
                                onChange={e => setPhone(e.target.value)} 
                                type="phone" 
                                placeholder="Укажите ваш сотовый телефон" />
                            
                            <div  className="input__div_style">
                                {errors?.phone && <p>{errors?.phone?.message?.toString()}</p>}
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                            <Form.Label>Семейное положение</Form.Label>
                            <Form.Select 
                                aria-label="Default select example"
                                onChange={ (e) => handleAddrTypeChange(e, setMaritalStatus)}
                            >
                                <option value="Высшее">Женат(замужем)</option>
                                <option value="Среднее">Не женат(не замужем)</option>
                                <option value="Основное общее">Разведен(а)</option>
                                
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                            <Form.Label>Наличие малолетних детей на иждивении (до 14 лет)</Form.Label>
                            <Form.Select 
                                aria-label="Default select example"
                                onChange={ (e) => handleAddrTypeChange(e, setHavingChildren)}
                            >
                                <option value="Высшее">На иждивении один несовершеннолетний ребенок</option>
                                <option value="Среднее">На иждивении двое несовершеннолетних детей</option>
                                <option value="Среднее">На иждивении трое и более несовершеннолетних детей</option>
                                <option value="Основное общее">Нет</option>
                                
                            </Form.Select>
                        </Form.Group>


                        {/* <Form.Group className="mb-3 input__style" style={{height: '240px'}} controlId="exampleForm.ControlInput1">
                            <Form.Label>Документ удостоверяющий личность</Form.Label>
                            <Form.Select 
                                aria-label="Default select example"
                                onChange={ (e) => handleAddrTypeChange(e, setPassport)}
                            >
                                <option value="Паспорт">Паспорт</option>
                                <option value="Иной">Иной</option>
                                <option value="Отсутствует">Отсутствует</option>
                                
                                
                            </Form.Select>
                            <br></br>


                            <Form.Control 
                                {...register('phone', {
                                    required: 'Поле обязательно к заполнению !',  
                                })}
                                value={phone} 
                                onChange={e => setPhone(e.target.value)} 
                                type="phone" 
                                placeholder="серия" />

                            <Form.Control 
                                {...register('phone', {
                                    required: 'Поле обязательно к заполнению !',  
                                })}
                                value={phone} 
                                onChange={e => setPhone(e.target.value)} 
                                type="text" 
                                placeholder="номер" />

                            <Form.Control 
                                {...register('phone', {
                                    required: 'Поле обязательно к заполнению !',  
                                })}
                                value={phone} 
                                onChange={e => setPhone(e.target.value)} 
                                type="text" 
                                placeholder="кем выдан" />

                            <Form.Control 
                                {...register('phone', {
                                    required: 'Поле обязательно к заполнению !',  
                                })}
                                value={phone} 
                                onChange={e => setPhone(e.target.value)} 
                                type="text" 
                                placeholder="когда выдан" />
                            <div  className="input__div_style"></div>
                        </Form.Group> */}

                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                            <Form.Label>Отношение к воинской обязанности</Form.Label>
                            <Form.Select 
                                aria-label="Default select example"
                                onChange={ (e) => handleAddrTypeChange(e, setMilitaryDuty)}
                            >
                                <option value="Высшее">Военнообязанный</option>
                                <option value="Среднее">Не военнообязанный</option>
                                
                                
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
                            <Form.Label>Наличие судимости</Form.Label>
                            <Form.Select 
                                aria-label="Default select example"
                                onChange={ (e) => handleAddrTypeChange(e, setCriminalRecord)}
                            >
                                <option value="Высшее">Не судим</option>
                                <option value="Среднее">Судим</option>
                                
                                
                            </Form.Select>
                        </Form.Group>


                        <Button   onClick={handleShow} variant="primary">Отправить</Button>{' '}



                        
                        
                    </Form>


                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    
                    </Modal.Header>
                        <Modal.Body>Проверьте правильность заполнения полей перед отправкой!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Закрыть
                        </Button>
                        <Button variant="primary" onClick={sendInfo}>
                            Отправить
                        </Button>
                        </Modal.Footer>
                    </Modal>


                    
            </Card> 
        </Container>
    )
}

export default observer (InformationPage)