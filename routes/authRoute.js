const express=require('express')
const router=express.Router()
const{userRegister, postEmailconfirmation, signIn, signout, forgotPassword, resetPassword, userList, userDetails,requireSignin, resendVerificationMail}=require('../controller/authController')


router.post('/register',userRegister)
router.post('/confirmation/:token',postEmailconfirmation)
router.post('/signin',signIn)
router.post('/signout',signout)
router.post('/forgotpassword',forgotPassword)
router.put('/resetpassword/:token',resetPassword)
router.get('/userlist',requireSignin,userList)
router.get('/userdetails/:id',requireSignin,userDetails)
router.post('/resendverificationmail',resendVerificationMail)


module.exports=router