const {createAttraction, getAllAttraction, getAttraction} = require('../controller/attraction.controller')
const express = require('express')

const route = express.Router();


route.post('/create', createAttraction)
route.get('/', getAllAttraction)
route.get('/:attraction_id', getAttraction)



module.exports = route

