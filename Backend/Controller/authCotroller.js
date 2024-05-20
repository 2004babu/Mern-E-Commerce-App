const catchAsyncError=require('../MiddleWares/catchAsyncError');
const bcrypt = require("bcrypt");

const User=require('../model/userModel');
const ErrorHandler = require('../util/errorHandler');
const sendToken = require('../util/jwt');

exports.registerUser=catchAsyncError(async(req,res,next)=>{
    const{name,email,password,avatar}=req.body
    const newuser=await User.create({
        success:true,
        name,
        email,
        password,
        avatar
    });
    newuser.save()
    console.log('fuaygeof');
    sendToken(newuser,201,res)
   
})

exports.loginUser=catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body;
    // conso le.log(email,password);

    if(!email|| !password){
        return next(new ErrorHandler('please enter Email & Password..'))
    }
    const newuser=await User.findOne({email}).select('+password')
    if(!newuser){
        return next(new ErrorHandler('please enter Email & Password..'))
    }
    const isUser= await newuser.isValidPassword(password)
    if(!isUser){
        return next(new ErrorHandler('please enter Email & Password.. password not match'))
    }
    sendToken(newuser,201,res)

})

exports.logoutUser=(req,res,next)=>{
    
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    }).status(200).json({success:true,message:"Logouted........"})
}
