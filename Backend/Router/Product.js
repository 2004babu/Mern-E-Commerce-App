const express=require('express');
const { getproduct, newProduct, getSingleProduct, updateProudct, deleProduct } = require('../Controller/ProductController');
const router=express.Router();
const {isAuthendicateUser,autherizeRole}=require('../MiddleWares/authendicate')

router.route('/products').get(isAuthendicateUser,getproduct)
router.route('/products/new').post(isAuthendicateUser,autherizeRole('admin'),newProduct)
router.route('/products/:id')
                             .get(getSingleProduct)
                             .put(isAuthendicateUser,autherizeRole('admin'),updateProudct)
                             .delete(isAuthendicateUser,autherizeRole('admin'),deleProduct);

module.exports=router;