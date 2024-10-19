const express = require('express');
const route = express.Router();
const { getUser } = require('../controller/users.controller')


route.get('/', getUser)


module.exports = route

