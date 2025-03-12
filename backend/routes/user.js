const express=require("express")
const {z}=require("zod")
const {jwt}=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const {User}=require('../db')
const JWT_SECRET = require("../config")
const { usermiddleware } = require("../middlewares/user")

const router=express.Router()

router.post("/signup",async (req,res)=>{
    const requireduser=z.object({
        username:z.string().min(10).max(20),
        password:z.string().main(6).max(20),
        firstname:z.string().min(10).max(20),
        lastname:z.string().min(10).max(20)
    })
    const safeparesed=requireduser.safeParse(req.body)
    if(!safeparesed.success){
        res.json({
            message:"inncorrect format",
            error:safeparesed.error
        })
    }
    const {username,password,firstname,lastname}=safeparesed.data
    try{
        const hashedpassword= await bcrypt.hash(password,2)
        await User.create({
            username:username,
            password:hashedpassword,
            firstname:firstname,
            lastname:lastname
        })
        res.json({
            message:"signed up succefully"
        })
    }catch(e){
        res.json({
            message:"user already exist"
        })
    }
})

router.post("/signin",async(req,res)=>{
    const {email,password}=req.body

    const user=await User.findOne({
        email:email
    })

    if(!user){
          res.json({
            message:"user not found"
          })
    }

    const correctpassword=bcrypt.compare(password,user.password)

    if(correctpassword){
        const token=jwt.sign({
            id:user._id.toString()
        },JWT_SECRET)
        res.json({
            token:token
        })
    }else{
        res.json({
            message:"incoorect credentials"
        })
    }
})
router.post("/transaction",usermiddleware,(req,res)=>{
    const userid=req.userid
})
module.exports=router