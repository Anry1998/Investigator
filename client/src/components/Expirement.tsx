import React, {FC, useContext, useState} from "react";
import { Context } from "..";





const Expirement: FC = () => {

    const {store} = useContext(Context)
    console.log(store.user.role)

    

    return(
        <div>
           { store.user.role === 'ADMIN' &&

           <div>Ты администратор, и у тебя есть мощные возможности</div>

           }
        </div>
    )
}

export default Expirement