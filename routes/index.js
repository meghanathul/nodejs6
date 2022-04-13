const express=require('express');
const router=express.Router();

const productRouter=require('./products')

router.use('/products',productRouter)  //help u to append the child routes
module.exports=router