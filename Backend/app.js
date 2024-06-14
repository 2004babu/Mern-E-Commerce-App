const express=require('express')
const cookieParser = require('cookie-parser');
const router = require('./Router/Product')
const order = require('./Router/order')
const auth = require('./Router/auth')
const path = require('path')
const errorMidleWare = require('./MiddleWares/error')
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/api/v1/',router)
app.use('/api/v1/',auth)
app.use('/api/v1/',order)

app.use(errorMidleWare)
module.exports=app