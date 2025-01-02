const mongoose= require ('mongoose')

const uri ="mongodb://localhost:27017/practical";

function connectDb(){
    mongoose
    .connect(uri)
     .then(()=> console.log("mongodb data is connect"))
     .catch((err)=> console.log("data is not connected"))
}
module.exports=connectDb