const {PersonalInformation, User, Token} = require('../models/user-model')


const { Op } = require('sequelize')


// const bcrypt = require('bcrypt') 
// const uuid = require('uuid')
// const mailService = require('./mail-service')
// const tokenService = require('./token-service')
// const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')


class PersonalInformationService {

    async saveInfo(id, gender, lastName, name, patronymic, dateOfBirth, placeOfBirth, placeOfRegistration, 
        placeOfResidence, phone, citizenship, education, maritalStatus, placeOfWork, militaryDuty, criminalRecord, passport, otherData) {
        
        // Если пользователь не найден создаем в БД токенов новые данные пользователя, куда передаем id и сам рефреш токен
        const statement = await PersonalInformation.create({id, gender, lastName, name, patronymic, dateOfBirth, placeOfBirth, placeOfRegistration, 
            placeOfResidence, phone, citizenship, education, maritalStatus, placeOfWork, militaryDuty, criminalRecord, passport, otherData, userId: id})
        // возвращаем токен
        return statement
    }


    async getApplicants(data) {
        try {
            const applicant = await PersonalInformation.findAll({
                where: {
                    // [Op.startsWith]: [{lastName: data}]

                    //  lastName: { [Op.startsWith]: "Бритви" }

                    [Op.or]: [
                        {lastName: { [Op.startsWith]: data }},
                        { name: { [Op.startsWith]: data }},
                        { patronymic: { [Op.startsWith]: data }},
                        { dateOfBirth: { [Op.startsWith]: data }},
                        { placeOfBirth: { [Op.startsWith]: data }},
                        { placeOfRegistration: { [Op.startsWith]: data }},
                        { placeOfResidence: { [Op.startsWith]: data }},
                        { phone: { [Op.startsWith]: data }},
                        { phone: { [Op.startsWith]: data }},
                        { placeOfWork: { [Op.startsWith]: data }},
                        { passport: { [Op.startsWith]: data }}
                    ]
                },
                attributes: {
                    exclude: ["isСonfirmed", "createdAt", "updatedAt", "userId"],
                  },
                  
                raw: true,  
                }
                
            )

            return applicant
        } catch(e) {
            console.log(e)
        }
    }



    async getUserApplicants(data) {
        try {
            const userApplicant = await PersonalInformation.findOne({
                where: {id:data},
                attributes: {
                    exclude: ["isСonfirmed", "createdAt", "updatedAt", "userId"],
                  },
                // raw: true,  
                }
            )


            // const userApplicant = await PersonalInformation.findOne({
            //     where: {id:data},
            //     attributes: {
            //         exclude: ["isСonfirmed", "createdAt", "updatedAt", "userId"],
            //       },
            //     include: {
            //         model: User,
            //         attributes: {
            //             exclude: [ "password", "updatedAt", "deletedAt"],
            //           },
            //     }  
            //     }
            // )


            return userApplicant
        } catch(e) {
            console.log(e)
        }
    }

    async getUserApplicantsId(id) {
        try {
            const userApplicant = await PersonalInformation.findOne({
                where: {id},
                attributes: {
                    exclude: ["isСonfirmed", "createdAt", "updatedAt", "userId"],
                  },
                  
                // raw: true,  
                }
                
            )

            return userApplicant
        } catch(e) {
            console.log(e)
        }
    }




    async applicantsFilter(dataArr, applicants) {
        try {     

            let arrFilter = (dataArrItem, arrItemAplicant) => {
                for (let key in arrItemAplicant) {
                    if (arrItemAplicant[key].toString().startsWith(dataArrItem)) {
                        return true
                    } 
                }
            }

            let res

            for (let i=1; i < dataArr.length; i++) {

                res = applicants.filter(item =>  {
                    return arrFilter(dataArr[i], item)
                })
                applicants = res  
            }

            return res 
           
        } catch(e) {
            console.log(e)
        }
    }










    async getDelete(data) {
        try {
            const applicant = await User.restore({
                where: {id: data},
                
                // attributes: ['lastName']
            })
            return applicant
        } catch(e) {
            console.log(e)
        }
    }


}
 
module.exports = new PersonalInformationService()