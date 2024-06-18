const ApiError = require('../exceptions/api-error')
const tokenService = require('../service/token-service')

module.exports = function (req, res, next) {
    try {
        const role = req.headers.role
        if (role !== 'USER') {
            return next(ApiError.UnauthorizedError())
        }
        next()
    } catch(e) {
        return next(ApiError.UnauthorizedError())
    }
}