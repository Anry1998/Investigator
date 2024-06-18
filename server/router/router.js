const Router = require('express')
const UserController = require('../controllers/user-controller')
const DataController = require('../controllers/date-controller')
const PersonalInformationController = require('../controllers/personalInformation-controller')
const StatementController = require('../controllers/statment-controller')
const ChatController = require('../controllers/chat-controller')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')
const adminMiddleware = require('../middlewares/admin-middleware')

router.post('/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 5, max: 15}),
    UserController.registration)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)
router.get('/activate/:link', UserController.activate)
router.get('/refresh', UserController.refresh)
router.get('/users', authMiddleware, UserController.getUsers)

router.get('/date_time', DataController.getData)

router.post('/reset', UserController.resetPass)
router.get('/reset/:link', UserController.resetPassMail)
router.post('/reset/:link', UserController.resetPassMailFinal)

router.post('/personalInformation', PersonalInformationController.sendInfo)

router.post('/getapplicant', authMiddleware, PersonalInformationController.getApplicants)

router.post('/getuserapplicant',  PersonalInformationController.getUserApplicants)
router.get('/getuserapplicant/:id', authMiddleware, adminMiddleware, PersonalInformationController.getUserApplicantsId)

router.post('/delete', PersonalInformationController.getDelete)


router.post('/statement', StatementController.sendStatement)
router.post('/statementname', StatementController.sendStatementName)
router.post('/statementtime', StatementController.sendStatementTime)



///////////////////////////////

router.post('/createuser2', UserController.createuser2) 
router.get('/getuser2', UserController.getuser2)

/// socket.io

router.post('/sendmessage', ChatController.sendMessage) 

router.get('/ok', (req, res) => {
    res.send('Ok')
})




module.exports = router