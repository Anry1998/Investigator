import $api from "../http";
import {AxiosResponse} from 'axios'
import { IPersonalInformation } from "../models/IPersonalInformation";

export default class GetApplicantsService {

    static  async fetchApplicants(data: string): Promise<AxiosResponse<IPersonalInformation[]>> {
        return $api.post<IPersonalInformation[]>('/getapplicant', {data})
    }

    static async fetchUserApplicant(useridString: number): Promise<AxiosResponse<IPersonalInformation>> {
        return $api.post<IPersonalInformation>('/getuserapplicant', {useridString})
    }

    static async  fetchUserApplicantsId(id: string): Promise<AxiosResponse<IPersonalInformation>> {
        return $api.get<IPersonalInformation>('/getuserapplicant/' + id)
    }

    // static  fetchUserApplicantsIdId(): Promise<AxiosResponse> {
    //     return $api.get('/getuserapplicant/:id')
    // }

    // static async login(email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
    //     return $api.post<AuthResponce>('/login', {email, password})
        
    // }

    
}