import $api from "../http";
import {AxiosResponse} from 'axios'

export default class StatementService {

    static async sendStatement(userId: number): Promise<AxiosResponse> {
        return $api.post('/statement', {userId})
    }

    static async sendStatementName(statementId:number, gender: string, lastName:  string): Promise<AxiosResponse> {
        return $api.post('/statementname', {gender, lastName, statementId})
    }

    static async sendStatementTime(statementId:number, date: string, time:  string): Promise<AxiosResponse> {
        return $api.post('/statementtime', {statementId, date, time})
    }

   
}