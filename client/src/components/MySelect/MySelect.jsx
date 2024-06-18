import React, {FC, useContext, useState} from "react";

import './MySelect.scss'







const MySelect = () => {

    const list1Options = ["Среднее", "Высшее"];

    const [currentSelect, setCurrentSelect] = useState('Value 1!')

    const [showSelect, setShowSelect] = useState(false)

    let toggleSelect = (e) => {
        setShowSelect(!showSelect)
        outside(e)


    }

    let outside= (e) => {
        let CT = document.querySelector('.select')
        // console.log(CT)
        // e.current.target !== 

        if(e.currentTarget !== CT) {
            // setShowSelect(!showSelect)
            console.log(CT)
        }

        // console.log(e.currentTarget)
    }

    

      
    
    return(
        
        <div className="select">
        <div className="select__header">
          <span className="select__current">{currentSelect}</span>
          <div className="select__icon" onClick={(e) => toggleSelect(e)}>X</div>
        </div>
        
        <div className=  {`select__body  ${showSelect && 'is-active'}` }>
          <div className="select__item">Value 1</div>
          <div className="select__item">Value 2</div>
          <div className="select__item">Value 3</div>
        </div>
      </div>
    )
}

export default MySelect