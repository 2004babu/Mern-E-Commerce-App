const express=require('express')
const { registerUser,loginUser, logoutUser, forgetPassword, resetPassword, GetUserProfile, ChangePassword, updateProfile, getUser, UpdateUser, getAllUsers, deleteUser } = require('../Controller/authCotroller')
const { isAuthendicateUser, autherizeRole } = require('../MiddleWares/authendicate')
const router=express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logoutUser)
router.route('/password/forgot').post(forgetPassword)
router.route('/password/reset').post(resetPassword)
router.route('/password/change').put(isAuthendicateUser,ChangePassword)
router.route('/myprofile').get(isAuthendicateUser,GetUserProfile)
router.route('/update').put(isAuthendicateUser,updateProfile)


/////admin role 
router.route('/admin/users').get(isAuthendicateUser,autherizeRole('admin'),getAllUsers);
router.route('/admin/user/:id')
.get(isAuthendicateUser,autherizeRole('admin'),getUser)
.put(isAuthendicateUser,autherizeRole('admin'),UpdateUser)
.delete(isAuthendicateUser,autherizeRole('admin'),deleteUser)



module.exports=router;
