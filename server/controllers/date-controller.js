class DataController {
    async getData(req, res, next) {
        try {
            // const date_time = new Date().getSeconds().toString()
            const dateTime = {
                year: new Date().getFullYear(),
                month: new Date().toLocaleString('default', { month: 'long' }),
                date:  new Date().getDate(),
                hour: new Date().getHours(),
                minute:  new Date().getMinutes(),
                second: new Date().getSeconds()
            }
            
            return res.json(dateTime)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new DataController()