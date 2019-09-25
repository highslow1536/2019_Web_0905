const express = require('express')
const bodyParser = require('body-parser')
const userRouter = express.Router()

const userApi = require('../api/user')

userRouter.use(bodyParser.urlencoded({ extended: true}))

userRouter.use(function timeLog (req, res, next) {
    console.log('Time : ', Date.now())
    next()
})

userRouter.post('/create', userApi.create)
userRouter.get('/info/', userApi.findAll)

module.exports = {
    userRouter
}
