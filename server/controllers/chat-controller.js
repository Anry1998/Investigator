class ChatController {
    async sendMessage(req, res, next) {
        try {
            const { id, message} = req.body 
            
            
            return res.json(dateTime)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ChatController()