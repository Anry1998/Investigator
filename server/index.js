require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const sequelize = require('./db')
const router = require('./router/router')
const errorMiddleware = require('./middlewares/error-middleware')

const PORT = process.env.PORT || 5000
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

const start = async () => {
    try {
        // устанавливаем подключение к базе данных
        await sequelize.authenticate()
        // функция сверяет состояние базы данных со схемой данных, которая будет описана позже
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    } catch (e) {
        console.log(e)
    }
}
start()



// const http = require('http')
// const {Server} = require('socket.io')


// const server = http.createServer(app)

// const io = new Server(server, {
//     cors: {
//         credentials: true,
//         origin: process.env.CLIENT_URL ,
//         methods: ['GET', "POST"]
//     }
// })


