import { WebUser } from "../schema/model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretKey } from "../../../src/constant.js";
import { sendEmail } from "../../../src/utils/sendemail.js";

export let createWebUser = async(req,res)=>{
    let webUserData= req.body
    let password =webUserData.password;

    try{
        let hashPassword = await bcrypt.hash(password,10)
        webUserData={
            ...webUserData,
            isVerifiedEmail: false,
            password: hashPassword,
        }
        let result = await WebUser.create(webUserData)

        //Generating token
        let infoObj ={
        _id:result._id, //id contains all details like name address etc. so it is better to use id
        }

        let expiryInfo={
        expiresIn:"5d"
        };

        let token =await jwt.sign(infoObj, secretKey, expiryInfo)

        //link
        //send email
        await sendEmail({
                        from:"Daraz <doernikki@gmail.com>",
                        to:[webUserData.email],
                        subject: "Email verification",
                        html:`
                        <h1 style="color:green">You have successfully registered.</h1>
                        <p>Dear ${webUserData.fullName} ,<br>Thank you for registering with us.Please verify your email.</p>
                        <a href="http://localhost:3000/verify-email?token=${token}">http://localhost:3000/verify-email?token=${token}</a>`
            
                    }) 


        res.status(201).json({
            success: true,
            message: "WebUser created successfully",
            data: result
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export let verifyEmail =async(req,res,next)=>{
  
    try {

        let tokenString = req.headers.authorization
        let tokenArray =tokenString.split(" ")
        let token =tokenArray[1]
    
        //verify token
        let infoObj = await jwt.verify(token,secretKey)
        let userId=infoObj._id
        let result=await WebUser.findByIdAndUpdate(
            userId,
            {
                isVerifiedEmail: true,
            },
            {
                new:true,
            }
        )

        res.status(201).json({
            success: true,
            message: "WebUser verified successfully",
            result:result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
        
    }
}

export let loginUser = async (req,res,next)=>{
    try {
        let email=req.body.email
        let password=req.body.password

        let user=await WebUser.findOne({email:email})

        if(user){
            if(user.isVerifiedEmail){
                let isValidPassword = await bcrypt.compare(password,user.password)
                if(isValidPassword){
                    let infoObj={
                    _id:user._id //id contains all details like name address etc. so it is better to use id
                    }
                    let expiryInfo={
                    expiresIn:"365d"
                    };

                    let token =await jwt.sign(infoObj, secretKey, expiryInfo)

                    res.status(200).json({
                        success: true,
                        message: "WebUser login successfully",
                        data: token
                    })

                }else{
                    let error = new Error("Credentials not found")
                    throw error
                }

            }else{
                let error = new Error("Credentials not found")
                throw error 
            }


        }
        else{
            let error = new Error("Credentials not found")
            throw error
        }
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
        
    }
}

export let myProfile= async(req,res,next)=>{
    try {
        let _id = req._id
        let result=  await WebUser.findById(_id)
        res.status(200).json({
            success: true,
            message: "Profile read successfully",
            data: result
        })
       
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
} 

export let updateProfile= async(req,res)=>{
    try{
        let _id=req._id
        let data= req.body
        delete data.email
        delete data.password
        let result = await WebUser.findByIdAndUpdate(_id,data,{new:true})
        res.status(201).json({
            success: true,
            message: "Profile updated successfully",
            data: result
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export let updatePassword=async(req,res,next)=>{
    try {
        let _id=req._id
        let oldPassword = req.body.oldPassword
        let newPassword = req.body.newPassword

        let data= await WebUser.findById(_id)
        let hashPassword =data.password

        let isValidPassword = await bcrypt.compare(oldPassword,hashPassword)

        if (isValidPassword){

        }else{
            let error = new Error("Credentials doesn't match")
            throw error
        }

        let newHashPassword = await bcrypt.hash(newPassword,10)

        let result= await WebUser.findByIdAndUpdate(_id,
            {
                password:newHashPassword
            },
        {new:true})

        res.status(201).json({
            success: true,
            message: "Password updated successfully",
            data: result
        })



        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "OldPassword doesn't match"
        })
        
    }
}

export let readAllUser = async(req,res)=>{
    try{
        let result = await WebUser.find({})
        res.status(200).json({
            success: true,
            message: "All users read successfully",
            result: result
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export let readSpecificUser = async (req,res)=>{
    let id = req.params.id
    try{

        let result = await WebUser.findById(id)
        res.status(200).json({
            success: true,
            message: "User read successfully",
            result: result
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
        
    }
}
export let updateSpecificUser = async (req,res)=>{
    let id = req.params.id
    let data =req.body
    delete data.email
    delete data.password
    try{

        let result = await WebUser.findByIdAndUpdate(id,data,{new:true})
        res.status(201).json({
            success: true,
            message: " User updated successfully",
            result: result
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
        
    }
}
export let deleteSpecificUser = async (req,res)=>{
    try{
        let id=req.params.id
        let result = await WebUser.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: " User deleted successfully",
            result: result
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
        
    }
}
export let forgotPassword = async (req,res)=>{
    try{
        let email=req.body.email
        let result=await WebUser.findOne({email:email})
        if(result){
            let infoObj={
                _id: result._id
                }

               
                let expiryInfo={
                expiresIn:"365d"
                };

                let token =jwt.sign(infoObj, secretKey, expiryInfo)

            //send email
            await sendEmail({
            from:"Daraz<niki.kstha7664@gmail.com>",
            to:email,
            subject: "Reset Password",
            html:`
            <h1>Please click given link to reset your password.</h1>
            <a href="http://localhost:3000/reset-password?token=${token}">
            http://localhost:3000/reset-password?token=${token}
            </a>`

        })

        res.status(200).json({
            success: true,
            message: "Link has been sent on email"

        })

        }else{
            res.status(404).json({
                success: false,
                message: "Email not found"

            })
        }
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
        
    }
}
export const resetPassword = async (req, res) => {
    try {
      let _id = req._id;
      // let password = req.body.
     
      

      let hashPassword = await bcrypt.hash(req.body.password, 10);
  
      let result = await WebUser.findByIdAndUpdate(_id,
        {password:hashPassword},
        {new:true},)
  
      res.status(201).json({
        success: true,
        message: "password reset successfully.",
        result : result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };



