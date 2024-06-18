import $api from "../http";
import {AxiosResponse} from 'axios'

export default class DateTimeService {

    static async getDateTime(): Promise<AxiosResponse> {

        return $api.get('/date_time')
    }

   
}