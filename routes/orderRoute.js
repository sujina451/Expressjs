const express=require('express')
const router=express.Router()
const { postOrder, orderDetails, orderList, updateStatus, deleteOrder, userOrders } = require("../controller/ordercontroller")
const { requireSignin } = require('../controller/authController')



router.post('/postorder',requireSignin,postOrder)
router.get('/orderlist',requireSignin,orderList)
router.get('/orderdetails/:id',orderDetails)
router.put('/updatestatus/:id',requireSignin ,updateStatus)
router.delete('/deleteorder/:id',requireSignin,deleteOrder)
router.get('/userorderlist/:userid',userOrders)


module.exports=router