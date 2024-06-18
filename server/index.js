require('dotenv').config()
const sequelize = require('./db')

const express = require('express')

const http = require('http')
const {Server} = require('socket.io')



const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router/router')
const errorMiddleware = require('./middlewares/error-middleware')
 
const PORT = process.env.PORT || 5001

const app = express()



// process.env.CLIENT_URL
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    // разрешаем куки
    credentials: true,
    // указываем с какого адреса разрешена отправка запросов
    origin: process.env.CLIENT_URL 
}))
app.use('/api', router)
app.use(errorMiddleware)


const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        credentials: true,
        origin: process.env.CLIENT_URL ,
        methods: ['GET', "POST"]
    }
})

const start = async () => {
    try {
        // устанавливаем подключение к базе данных
        await sequelize.authenticate()
        // функция сверяет состояние базы данных со схемой данных, которая будет описана позже
        await sequelize.sync({ alter: true })
        server.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    
    } catch (e) {
        console.log(e)
    }
}
start()
