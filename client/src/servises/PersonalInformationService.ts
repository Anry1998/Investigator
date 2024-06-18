import $api from "../http";

// import $api2 from '../http/axios'
import {AxiosResponse} from 'axios'
import { IPersonalInformation } from "../models/IPersonalInformation";

export default class PersonalInformationService {

    static async sendInfo(id: number,gender:  string, lastName: string, name: string,
        patronymic: string, dateOfBirth: string, placeOfBirth: string, placeOfRegistration: string,
        placeOfResidence: string, phone: string, citizenship: string, education: string, maritalStatus: string,
        placeOfWork: string, militaryDuty: string, criminalRecord: string, passport: string, 
        otherData: string, ): Promise<AxiosResponse<IPersonalInformation>> {
        return $api.post<IPersonalInformation>('/personalInformation', {id, gender, lastName, name, patronymic, dateOfBirth, placeOfBirth, placeOfRegistration, 
            placeOfResidence, phone, citizenship, education, maritalStatus, placeOfWork, militaryDuty, criminalRecord, passport, otherData})
    }


    

    
}