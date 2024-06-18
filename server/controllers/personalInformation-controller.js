 const personalInformationService = require("../service/personalInformation-service")


//  const TokenService = require("../service/token-service")



const ApiError = require('../exceptions/api-error') 
const { response } = require("express")

class PersonalInformationController {

    async sendInfo(req, res, next) {
        try {
            const { id, gender, lastName, name, patronymic, dateOfBirth, placeOfBirth, placeOfRegistration, 
                placeOfResidence, phone, citizenship, education, maritalStatus, placeOfWork, militaryDuty, criminalRecord, passport, otherData} = req.body 
            const personalInformationData = await personalInformationService.saveInfo(id, gender, lastName, name, patronymic, dateOfBirth, placeOfBirth, placeOfRegistration, 
                placeOfResidence, phone, citizenship, education, maritalStatus, placeOfWork, militaryDuty, criminalRecord, passport, otherData)
            
            return res.json(personalInformationData)
        } catch (e) {
            next(e)
        }
    }



    async getApplicants(req, res, next) {
        try {
            const {data} = req.body 
            
            let dataArr = data.split(' ')
            dataArr = dataArr.filter(item => item != '')
            

            let applicants = await personalInformationService.getApplicants(dataArr[0])

            if (dataArr.length > 1) {
                applicants = await personalInformationService.applicantsFilter(dataArr, applicants)
            }
            return res.json(applicants)
            
        } catch (e) {
            next(e)
        }
    }

    async getUserApplicants(req, res, next) {
        try {
            const {useridString} = req.body 
            let userApplicants = await personalInformationService.getUserApplicants(useridString)

            // if (dataArr.length > 1) {
            //     applicants = await personalInformationService.applicantsFilter(dataArr, applicants)
            // }
            return res.json(userApplicants)
            
        } catch (e) {
            next(e)
        }
    }

    async getUserApplicantsId(req, res, next) {
        try {
            const {id} = req.params  
            let userApplicants = await personalInformationService.getUserApplicantsId(id)

            return res.json(userApplicants)
            
        } catch (e) {
            next(e)
        }
    }


    async getDelete(req, res, next) {
        try {
            const {data} = req.body 
            const applicant = await personalInformationService.getDelete(data)

            return res.json('Delete')
        } catch (e) {
            next(e)
        }
    }
    

    
}

module.exports = new PersonalInformationController()