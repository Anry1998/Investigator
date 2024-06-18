const statementService = require("../service/statement-service")
const ApiError = require('../exceptions/api-error') 


class StatementController {
    async sendStatement(req, res, next) {
        try {   
            const {userId} = req.body
             const statementData = await statementService.createStatement(userId)
            return res.json(statementData.id)
        } catch (e) {
            next(e)
        }
    }

    async sendStatementName(req, res, next) {
        try {   
            const {gender, lastName, statementId} = req.body
             const statementDataName = await statementService.createStatementName(gender, lastName, statementId)
            return res.json(gender)
        } catch (e) {
            next(e)
        }
    }

    async sendStatementTime(req, res, next) {
        try {   
            const {date, time, statementId} = req.body
             const statementDataName = await statementService.createStatementTime(date, time, statementId)
            return res.json(statementDataName)
        } catch (e) {
            next(e)
        }
    }

   
    
 
}

module.exports = new StatementController()