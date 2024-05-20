const express=require('express')
const cookieParser = require('cookie-parser');
const router = require('./Router/Product')
const auth = require('./Router/auth')
const errorMidleWare = require('./MiddleWares/error')
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json())
app.use('/api/v1/',router)
app.use('/api/v1/',auth)

app.use(errorMidleWare)
module.exports=app