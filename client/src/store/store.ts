import { IUser } from "../models/IUser";
import { IPersonalInformation } from "../models/IPersonalInformation";
import {makeAutoObservable} from 'mobx'
import AuthService from "../servises/AuthService";

import ResetPassService from "../servises/ResetPassService";
import GetApplicantsService from "../servises/GetApplicantsService";
import axios from "axios";
import { AuthResponce } from "../models/responce/AuthResponce";
const API_URL = 'http://localhost:5000/api'

export default class Store {
    user = {} as IUser
    userApplicant = {} as IPersonalInformation


    isAuth = false

    isLoading = false

    isAdmin = ''

    errMessageLogin = ''
    errMessageRegistration = ''

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setAdmin(role: string) {
        this.isAdmin = role
    }

    setErrMessageLogin(errMessageLogin: string) {
        this.errMessageLogin = errMessageLogin
    }

    setErrMessageRegistration(errMessageRegistration: string) {
        this.errMessageRegistration = errMessageRegistration
    }

    setUser(user: IUser) {
        this.user = user;
    }

    

    setUserApplicant(userApplicant: IPersonalInformation) {
        this.userApplicant = userApplicant;
    }

    // setDate(date: IDate) {
    //     this.date = date;
    // }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    async login(email: string, password: string) {
        this.setLoading(true)
        try {
            
            const responce = await AuthService.login(email, password)
            localStorage.setItem('token', responce.data.accessToken)
            localStorage.setItem('role', responce.data.user.role)
            localStorage.setItem('id', responce.data.user.id.toString())
            console.log(responce.data.user.id)
            
            this.setAuth(true)
            this.setUser(responce.data.user)


            const responceAplicant = await GetApplicantsService.fetchUserApplicant(responce.data.user.id)
            this.setUserApplicant(responceAplicant.data)
            console.log(this.userApplicant.id)

            this.setAdmin(responce.data.user.role)
            
            
            
        } catch (e: any) {
            const err = e.response.data.message
            this.setErrMessageLogin(err)
            // console.log(err)
            
            return err
        } finally {
            this.setLoading(false)
        }
    }

    async registration(email: string, password: string) {
        this.setLoading(true)
        try {
            const responce = await AuthService.registration(email, password)
            console.log(responce)
            localStorage.setItem('token', responce.data.accessToken)
            localStorage.setItem('role', responce.data.user.role)
            localStorage.setItem('id', responce.data.user.id.toString())
            this.setAuth(true)
            this.setUser(responce.data.user)
        } catch (e: any) {
            const err = e.response.data.message
            this.setErrMessageRegistration(err)
            console.log(err)
            return err
        } finally {
            this.setLoading(false)
        }
    }

    async logout() {
        try {
            const responce = await AuthService.logout()
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            localStorage.removeItem('id')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch (error) {
            let errorMessage = "Ошибка при логауте";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            // Тело ответа ожидаем AuthResponce
            const responce = await axios.get<AuthResponce>(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', responce.data.accessToken)
            this.setAuth(true)
            this.setUser(responce.data.user)
        } catch (e) {
            console.log(e)
        } finally {
            this.setLoading(false)
        }
    }


     

    async resetPass(email: string) {
        try {
            const responce = await ResetPassService.reset(email)
 
        } catch (error) {
            let errorMessage = "Ошибка при сбросе пароля";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }

    async resetPassFinal(email: string, newPassword: string) {
        try {
            console.log(email, newPassword)
            const link = window.location.href
            
            const linkResetPass = link.replace("http://localhost:3000/reset/", '')
            console.log(link)
            console.log(linkResetPass)
            const responce = await ResetPassService.resetEmail(email, newPassword, linkResetPass)
            console.log(responce)
            
        } catch (error) {
            let errorMessage = "Оштбка при сбросе пароля";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }
    
}