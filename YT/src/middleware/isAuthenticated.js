import { secretKey } from "../../../src/constant.js"
import jwt from "jsonwebtoken"

export let isAuthenicated= async(req,res,next)=>{
    try {
        //get token from postman
      let bearerToken = req.headers.authorization
    let token = bearerToken.split(" ")[1]

let user = await jwt.verify(token,secretKey)

req._id = user._id

next()
        
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Token not valid"
        })
        
    }
    
}