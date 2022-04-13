const express=require('express');
const cors=require('cors')
const mainRouter=require('./routes/index.js')

const app=express();
app.use(cors());

 app.use('/api/v1',mainRouter);   //child route


 app.listen(5000,()=>{
   console.log('Application is start.........')
 })


//project

