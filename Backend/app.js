const express=require('express')
const router = require('./Router/Product')
const errorMidleWare = require('./MiddleWares/error')
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/v1/',router)
// app.get('/',(req,res)=>{
//     console.log(req.body);
//     res.send({
//         name:"get route test "
//     })
// })
app.use(errorMidleWare)
module.exports=app