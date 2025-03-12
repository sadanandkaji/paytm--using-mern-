const express=require("express")
const { usermiddleware } = require("../middlewares/user")
const mongoose=require("mongoose")
const { Account } = require("../db")


const router=express.Router()

router.post("/transfer",usermiddleware,async (req,res)=>{
    const session=await mongoose.startSession()

    session.startTransaction();
    const {amount,to}=req.body
    const account=await Account.findOne({userid:req.id}).session(session);

    if(!account || account.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"insufficient balance"
        })
    }

    const toaccount=await Account.findOne({userid:to}).session(session);
    if(!toaccount){
        await session.abortTransaction();
        return res.json({
            message:"invalid account"
        })
    }

    await Account.updateOne({userid:req.userid},{"$inc":{balance:-amount}}).session(session)
    await Account.updateOne({userid:to},{"$inc":{balance:amount}}).session(session)

    await session.abortTransaction();
    res.json({
        message:"transfer succefull"
    })

})

router.get("/balance",usermiddleware,async(req,res)=>{

    const balance=await Account.findOne({userid:req.userid})
    res.json({
        balance:balance.balance
    })
})
module.exports=router