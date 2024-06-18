const {PersonalInformation, User, Token} = require('../models/user-model')


const ApiError = require('../exceptions/api-error')


class ChatService { 

    async saveInfo(id, gender) {
        
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


}
 
module.exports = new ChatService()