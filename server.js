const express=require('express');
const mongoose=require('mongoose');
const schema=require('./schema');

const app=express();
require('dotenv').config();

const PORT=3000;
app.use(express.json()); 

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
.then(() =>{
    console.log('Connected to Mongodb')
})
.catch((err)=>{
    console.log("fAILEDTO CONNECT",err)
});

app.get('/',(req,res)=>{
    res.send('Hello World');
});



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});