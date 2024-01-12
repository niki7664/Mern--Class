import { secretKey } from "../constant.js";
import jwt from "jsonwebtoken"

export let isAuthenticated = (req,res,next)=>{
    //get token from postman
    let bearerToken = req.headers.authorization
    let token = bearerToken.split(" ")[1]

    try {
        //verify token
        let infoObj = jwt.verify(token,secretKey)
        let id = infoObj.id;
        req.id =id;
        next()
    } catch (error) {
        res.json({
            success:false,
            message: "Token not valid"
        })
    }
}

