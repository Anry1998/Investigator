// import { IUser } from "../models/IUser";
// import { IDate } from "../models/IDate";
import {makeAutoObservable} from 'mobx'

import StatementService from "../servises/StatementService";


export default class StatmentStore {

    //  Суета, котора отвечает за красное свечение табов в разделе подачи заявления

    tabName = 'start'


    tabTime = 'start'



    checkboxGender = 'Мужской'

    setCheckboxGender(checkboxGender: string) {
        this.checkboxGender = checkboxGender
    }

    inputLastName = ''
    setInputLastName(inputLastName: string) {
        this.inputLastName = inputLastName
    }

    inputName = ''
    seInputName(inputName: string) {
        this.inputName = inputName
    }

    // commonStartCheckInput = (this.tabName && this.tabTime)



   // Глобально выношу id заявления, чтобы при его создании указать его столбцом во всех заявках
    statmentId = ''

    constructor() {
        makeAutoObservable(this)
    }

    setTabName(tabName: string) {
        this.tabName = tabName
    }


 

    setTabTime(tabTime: string) {
        this.tabTime = tabTime
    }

    // setСommonStartCheckInput(data: string) {
    //     this.commonStartCheckInput = data
    // }


    setStatmentId(statmentId: string) {
        this.statmentId = statmentId
    }




    async getStatmentId(userId: number) {
        try {
            const responce = await StatementService.sendStatement(userId)
            this.setStatmentId(responce.data)
            
        } catch (error) {
            let errorMessage = "Ошибка ";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }
    

    
    
}