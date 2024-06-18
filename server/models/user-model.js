const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {
        // Задаем тип данных
        type: DataTypes.INTEGER, 
        // всегда будет содержать уникальные данные, нибудет нулевых значений
        primaryKey: true, 
        // постоянно значение будет увеличиваться на 1
        autoIncrement: true
    },

    email: {
        type: DataTypes.STRING, 
        // Уникальный
        // unique: true,
        // Обязательный параметр
        require: true
    },

    password: {
        type: DataTypes.STRING,
        require: true
    },

    isActivated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }, 

    activationLink: {
        type: DataTypes.STRING,
    },

    resetPassLink: {
        type: DataTypes.STRING,
        defaultValue: null
    },
        
    role: {
        type: DataTypes.STRING, 
        // Значение по умолчанию
        defaultValue: "USER"
    },
    isVerified: {
        type: DataTypes.STRING, 
        // Значение по умолчанию
        defaultValue: "No"
    },
    
}, {
    
    timestamps: true,
    createdAt: false,
    // updatedAt: 'updatedTimeStamps',
    // Мякгое удаление, Когда ты удаляешь свою учетную запись, это на самом деле не удаляет ее из бд
    // А ставит некий флажок, что ты ее удалил
    paranoid: true,
    // deletedAt: true
})

// Создаем модель для пользователя со следующими атрибутами


const User2 = sequelize.define('User2', {
    // имя
    name: DataTypes.STRING,
    // любимый цвет - по умолчанию зеленый
    favouriteColor: {
      type: DataTypes.STRING,
      defaultValue: 'green',
    },
    // возраст
    age: DataTypes.INTEGER,
    // деньги
    cash: DataTypes.INTEGER,
  }, {
    timestamps: false,
  })

  
const Token = sequelize.define('token', {
    
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 

    refreshToken: {
        type: DataTypes.STRING,
        require: true
    },

    
})


const PersonalInformation = sequelize.define('personalInformation', {
    id: {
        // Задаем тип данных
        type: DataTypes.INTEGER, 
        // всегда будет содержать уникальные данные, нибудет нулевых значений
        primaryKey: true, 
        // постоянно значение будет увеличиваться на 1
        // autoIncrement: true
    }, 

    gender: {
        type: DataTypes.STRING, 
        require: true
    },

    lastName: {
        type: DataTypes.STRING, 
        
        // Обязательный параметр
        require: true,


        // getDataValue - метод, который получает данные в том виде, в каком они хранятся в БД
        // get() {
        //     const rawValue = this.getDataValue('lastName')
        //     return rawValue ? rawValue.toUpperCase() : null
        // }
    },

    name: {
        type: DataTypes.STRING, 
        
        // первым параметром задаем значение которое хотим извенить, вторым на что хотим извенить
        // set () {
        //     this.setDataValue('name', 'Какието махинации над именем')
        // }

        // get  метод не вносит никаких изменений в БД, а только делает махинации после вызова 
        // set метод делает махинации перед сохранением в БД и сохраняет их туда
    },

    patronymic: {
        type: DataTypes.STRING, 
        
        // Обязательный параметр
        require: true
    },

    dateOfBirth: {
        type: DataTypes.STRING, 
        require: true
    },   

    placeOfBirth: {
        type: DataTypes.STRING, 
        require: true
    },

    placeOfRegistration: {
        type: DataTypes.STRING, 
        require: true
    },

    placeOfResidence: {
        type: DataTypes.STRING, 
        require: true
    },

    phone: {
        type: DataTypes.STRING, 
        require: true
    },

    citizenship: {
        type: DataTypes.STRING, 
        require: true
    },

    education: {
        type: DataTypes.STRING, 
        require: true
    },

    maritalStatus: {
        type: DataTypes.STRING, 
        require: true
    },

    placeOfWork: {
        type: DataTypes.STRING, 
        require: true
    },

    militaryDuty: {
        type: DataTypes.STRING, 
        require: true
    },

    criminalRecord: {
        type: DataTypes.STRING, 
        require: true
    },

    passport: {
        type: DataTypes.STRING, 
        require: true
    },

    otherData: {
        type: DataTypes.STRING, 
        require: true
    },

    isСonfirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    
    
})

const Statement = sequelize.define('statement', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },

    userId: {
        type: DataTypes.INTEGER, 
        
    },

    date: {
        type: DataTypes.STRING, 
        require: true,
        
    },

    time: {
        type: DataTypes.STRING,
        require: true
    },
 
}, {
    timestamps: false, 
})

const StatementName = sequelize.define('statementname', {
    statementId: {
        type: DataTypes.INTEGER,  
    },

    gender: {
        type: DataTypes.STRING, 
        require: true
    },
    lastName: {
        type: DataTypes.STRING, 
        require: true
    },

}, {
    timestamps: false,

})

const StatementTime = sequelize.define('statementtime', {
    statementId: {
        type: DataTypes.INTEGER,  
    },

    date: {
        type: DataTypes.STRING, 
        require: true
    },

    time: {
        type: DataTypes.STRING, 
        
        // Обязательный параметр
        require: true,

    },
   
 
}, {
    timestamps: false,
})


const ChatList = sequelize.define('chatList', {
    chatId: {
        type: DataTypes.INTEGER,  
        require: true,
        autoIncrement: true
    },

    chatСreatorId: {
        type: DataTypes.INTEGER, 
        require: true
    },

    time: {
        type: DataTypes.STRING, 
        
        // Обязательный параметр
        require: true,

    },
   
 
}, {
    timestamps: false,
})

// Связь один к одному при этом Token принадлежит User
// Если мы напишем только User.hasOne(Token) то мы можем найти только токен вбив id  user
User.hasOne(Token)
// Запись ниже позволяет по токену найти id
Token.belongsTo(User)

User.hasOne(PersonalInformation)
PersonalInformation.belongsTo(User)

User.hasMany(Statement)
Statement.belongsTo(User)

Statement.hasOne(StatementName)
StatementName.belongsTo(Statement)

Statement.hasOne(StatementTime)
StatementTime.belongsTo(Statement)


module.exports = {
    User,
    User2,
    Token,
    PersonalInformation,
    Statement,
    StatementName,
    StatementTime


}


