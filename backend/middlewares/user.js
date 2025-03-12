const jwt=require("jsonwebtoken");
const JWT_SECRET = require("../config");

function usermiddleware(req,res,next){
     const authheader=req.headers.authentication;
     if(!authheader || !authheader.startsWith('bearer ')){
        return res.status(400).json({})
     }
     const token=authheader.split(' ')[1]


     const decoded=jwt.verify(token,JWT_SECRET)
if(decoded.id){
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
