import { IPersonalInformation } from "../models/IPersonalInformation";
import {makeAutoObservable} from 'mobx'
// import AuthService from "../servises/AuthService";
import {AxiosResponse} from 'axios'

import PersonalInformationService from "../servises/PersonalInformationService";

import GetApplicantsService from "../servises/GetApplicantsService";

import axios from "axios";
// import { AuthResponce } from "../models/responce/AuthResponce";
const API_URL = 'http://localhost:5000/api'

export default class PersonalInformation {
    userApplicant = {} as IPersonalInformation

    applicantArr = []

    constructor() {
        makeAutoObservable(this)
    }

    setApplicantArr (applicantArr: any) {
        this.applicantArr = applicantArr;
    }

    setUserApplicant(userApplicant: IPersonalInformation) {
        this.userApplicant = userApplicant;
    }

   

    

    async sendInfo(id: number, gender:  string, lastName: string, name: string,
        patronymic: string, dateOfBirth: string, placeOfBirth: string, placeOfRegistration: string,
        placeOfResidence: string, phone: string, citizenship: string, education: string, maritalStatus: string,
        placeOfWork: string, militaryDuty: string, criminalRecord: string, passport: string, 
        otherData: string) {
        
        try {
             const responce = await PersonalInformationService.sendInfo(id, gender, lastName, name, patronymic, dateOfBirth, placeOfBirth, placeOfRegistration, 
                placeOfResidence, phone, citizenship, education, maritalStatus, placeOfWork, militaryDuty, criminalRecord, passport, otherData)

                const responceAplicant = await GetApplicantsService.fetchUserApplicant(id)
                this.setUserApplicant(responceAplicant.data)
                console.log(this.userApplicant)

        } catch (e: any) {
            const arr = e.response.data.message
            return arr
        } finally {
            
        }
    }

    async fetchApplicants(data: string) {
        try {
        const responce = await GetApplicantsService.fetchApplicants(data)
        this.setApplicantArr(responce.data)
 
        } catch (e: any) {
            const arr = e.response.data.message
            
            return arr
        } 
    }


    async fetchUserApplicants(useridString: string) {
        try {
            // const responce = await GetApplicantsService.fetchUserApplicant(useridString)
           
            // console.log(this.userApplicant)
 
        } catch (e: any) {
            const arr = e.response.data.message
            return arr
        } 
    }

    
    
}