exports.productValidation=(req,res,next)=>{
    req.check('product_name',"Product Name is Required").notEmpty()
    req.check('product_price',"Product Price is Required").notEmpty()
    .isNumeric()
    .withMessage('Price contains only numeric value')
    req.check('countInStock',"stock number is required").notEmpty()
    .isNumeric()
    .withMessage('Stock contains only numeric value')
    req.check('product_description',"Description is required").notEmpty()
    .isLength({
        min:30
    })
    .withMessage('Despricption must be more than 30 characters')
    req.check('category','Category is required').notEmpty()

    const errors=req.validationErrors()
    if(errors){
        const showerror=errors.map(error=>error.msg)[0]
        return res.status(400).json({error:showerror})
    }
    next(); //allows to jump to next function
}


exports.userValidation=(req,res,next)=>{
    req.check('name',"Name is Required").notEmpty()
    req.check('email',"email is Required").notEmpty()
    .isNumeric()
    .withMessage('invalid email')
    req.check('password',"password is required").notEmpty()
    .isLength({
        min:8
    })
    .withMessage('password must be more than 8 characters')

    const errors=req.validationErrors()
    if(errors){
        const showerror=errors.map(error=>error.msg)[0]
        return res.status(400).json({error:showerror})
    }
    next(); //allows to jump to next function
}