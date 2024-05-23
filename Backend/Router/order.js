const express=require('express')
const router=express.Router();
const {isAuthendicateUser,autherizeRole}=require('../MiddleWares/authendicate');
const { newOrder, getsingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder,createReview,getReviews,deleteReview } = require('../Controller/orderController');

router.route('/order/new').post(isAuthendicateUser,newOrder)
router.route('/order/:id').get(isAuthendicateUser,getsingleOrder)
router.route('/myOrders/:id').get(isAuthendicateUser,myOrders)


//Admin Routes  
router.route('/orders').get(isAuthendicateUser,autherizeRole('admin'),getAllOrders)
router.route('/order/:id').put(isAuthendicateUser,autherizeRole('admin'),updateOrder)
.delete(isAuthendicateUser,autherizeRole('admin'),deleteOrder)
router.route('/review').put(isAuthendicateUser,createReview)
router.route('/reviews').get(isAuthendicateUser,getReviews)
                        .delete(isAuthendicateUser,deleteReview)


module.exports=router;