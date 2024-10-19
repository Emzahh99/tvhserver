const express = require('express');
const route = express.Router();

const {createCategory,getAllCategory,getCategory} = require('../controller/category.controller')


route.post('/create', createCategory)
route.get('/', getAllCategory)
route.get('/:id', getCategory)


module.exports = route