const { userCreate , userlogin, userUpdate } = require('../controller/auth.controller')
const express = require('express')

const route = express.Router()


route.post('/login', userlogin)
route.post('/create', userCreate)
route.put('/update', userUpdate)



module.exports = route;


