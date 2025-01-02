const express = require ('express')
const app = express();
const {default : mongoose}=require ('mongoose');
const userSchema = require ('./model/userSchema')
const connectDb = require('./config/db');

connectDb();

app.get('/',(req,res)=>{
    res.send("hello world")               
});
app.post('/register',async (req,res)=>{
    try{
        const {name,email,age,number}=req.body
        const userExist = await userModel.findOne({number});

        const newuser= userModel.create(req.body);
        await newuser.save();
    }
    catch(err){
        console.log(err)
    }
})



app.listen(4000,()=>{
    console.log("server is running")
})