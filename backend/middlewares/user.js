const {jwt}=require("jsonwebtoken");
const JWT_SECRET = require("../config");

function usermiddleware(req,res,next){
     const token=req.headers.authentication;
     const decoded=jwt.verify(token,JWT_SECRET)
if(decoded){
   req.userid=decoded.id
next()
}else{
    res.json({
        message:"you have not signed up"
    })
}
}

module.exports={
    usermiddleware
}
