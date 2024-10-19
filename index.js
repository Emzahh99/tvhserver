const express = require('express')
const cors = require('cors')
const UserRoute  = require('./route/users.route')
const AuthRoute = require('./route/auth.route')
const AttractionRoute = require('./route/attraction.route')
const CategoryRoute = require('./route/category.route')

app = express()

app.use(express.json())
//app.use(express.urlencoded({extended : false}))
//app.use(cors)

app.listen(3001)


app.use('/users', UserRoute)
app.use('/auth', AuthRoute)
app.use('/attraction', AttractionRoute)
app.use('/category', CategoryRoute)