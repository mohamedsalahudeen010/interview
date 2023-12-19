import { Jwt } from "jsonwebtoken";

const isSignedIn=async(req,res,next)=>{
    let token;
    if(req.headers){
        try {
           token=req.headers["x-auth-token"];
            if(!token){return res.status(400).json({message:"Access denied"})}
            const decode=jwt.verify(token,process.env.USER_SECRET_CODE);
            req.user=await ModelName.findBYId(decode.id).select("-password")
            next()
        } catch (error) {
            return res.status(401).json({message:"invalid Authorization"})
        }
    }
}