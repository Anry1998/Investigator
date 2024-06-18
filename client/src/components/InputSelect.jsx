import React, {FC, useContext, useState} from "react";



import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card, Row} from 'react-bootstrap';





const InputSelectFunction = () => {

    const list1Options = ["Среднее", "Высшее"];

      
    
    return(
        
      <Form.Group className="mb-3 input__style" controlId="exampleForm.ControlInput1">
      <Form.Label> </Form.Label>

      

      
      <Form.Select 
          aria-label="Default select example"
        //   onChange={ (e) => handleAddrTypeChange(e, setEducation)}
      >
        {
            list1Options.map((o) => {
              <option value={o}>{onabort}</option>
            })

        }
          {/* <option value="Высшее"></option>
          <option value="Среднее">Среднее</option>
          <option value="Основное общее">Высшее</option> */}
          
      </Form.Select>

  </Form.Group>
    )
}

export default InputSelectFunction