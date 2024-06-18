import { useState } from 'react'
import './ButtonBurger.scss'




const ButtonBurger = () => {

    const [btnState, setBtnState] = useState(false)

    const handleClick = () => {
        setBtnState(btnState => !btnState)
    }

    let toggleClassCheck = btnState ? 'active' : null
    
    return (
        <div  
            className={`header__burger ${toggleClassCheck}`}
            onClick={handleClick}
        >
            <span></span>
        </div>    
    )
    
}

export default ButtonBurger