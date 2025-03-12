const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:aOum012s2CzoYkV8@cluster0.voq2a.mongodb.net/paytm")

const userschema= new mongoose.Schema({
    username:{type:String,unique:true},
    password:String,
    firstname:String,
    lastname:String
})

const User= mongoose.model("User",userschema)


module.exports={
    User
}