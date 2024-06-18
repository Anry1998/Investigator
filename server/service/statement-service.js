const {Statement, StatementName, StatementTime} = require('../models/user-model')
const {User} = require('../models/user-model')
const ApiError = require('../exceptions/api-error')


class StatementService {

    async createStatement(userId) {
        const date = `${new Date().getFullYear()} ${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}`
        const time = `${new Date().getHours()} ${new Date().getMinutes()}`
        const statement = await Statement.create({userId: userId, date: date, time: time})
        return statement
    }

    async createStatementName( gender, lastName, statementId) {

        const statement = await StatementName.create({gender:gender, lastName: lastName, statementId: statementId})
        return statement
    }

    async createStatementTime( date, time, statementId) {

        const statement = await StatementTime.create({date:date, time: time, statementId: statementId})
        return statement
    }



}
 
module.exports = new StatementService()