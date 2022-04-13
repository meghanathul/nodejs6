const express=require('express');
const productRouter=express.Router()   //allow u to create child router
const productController=require('../controllers/products')

productRouter.route('/')
.get(productController.getData)

module.exports=productRouter;


