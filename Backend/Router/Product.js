const express=require('express');
const { getproduct, newProduct, getSingleProduct, updateProudct, deleProduct } = require('../Controller/ProductController');
const router=express.Router();


router.route('/products').get(getproduct)
router.route('/products/new').post(newProduct)
router.route('/products/:id')
                             .get(getSingleProduct)
                             .put(updateProudct)
                             .delete(deleProduct);

module.exports=router;