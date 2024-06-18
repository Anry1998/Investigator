// import { IUser } from "../models/IUser";
// import { IDate } from "../models/IDate";
import {makeAutoObservable} from 'mobx'
import AuthService from "../servises/AuthService";

import DateTimeService from "../servises/Date_timeServise";

import { IDate } from "../models/IDate";


import axios from "axios";
import { AuthResponce } from "../models/responce/AuthResponce";
const API_URL = 'http://localhost:5000/api'

export default class DataTime {
    date = {} as IDate

    constructor() {
        makeAutoObservable(this)
    }
    

    setDate(date: IDate) {
        this.date = date;
    }

    async dateTime() {
        try {
            const responce = await DateTimeService.getDateTime()
            this.setDate(responce.data)
            
            // const responceDate = responce.data
            // console.log(...responceDate)
            return responce.data
        } catch (error) {
            console.log(error)
        }
    }
    
}