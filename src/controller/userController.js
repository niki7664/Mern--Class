import { User } from "../../schema/model.js"
import bcrypt from "bcrypt"
import { sendEmail } from "../utils/sendemail.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../constant.js";

export let createUser = async(req,res)=>{
    let userData=req.body
    let password =userData.password;

    try{
        let hashPassword = await bcrypt.hash(password,10)
        userData.password = hashPassword;
        let result=await User.create(userData)

        //Error : error has occurred transporter.sendEmail is not a function
        //It means either email or password is invalid.

// await sendEmail({
//             from:"Niki <niki.kstha7664@gmail.com>",
//             to:[req.body.email],
//             subject: "Email verification",
//             html:`
//             <h1 style="color:green">You have successfully registered.</h1>
//             <p>Dear ${req.body.name} ,<br>Thank you for registering with us.</p>
//             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Daraz_Logo.png" style="height:80px;width:70px">`

//         })        
        res.status(201).json({
            success: true,
            message: "User created Successfully",
            result: result
        })
    }

    catch(error){
        res.status(409).json({
            success: false,
            message: error.message    
        })
    }
}

export let readUser = async(req,res)=>{

    //search by query 
    //post man ma hit garda kun search garne ho tesko data yesari dine localhost:8000/users?name=hari&age=40 
    let query =req.query
    let brake = query.brake
    let page = query.page
    try{
        // let result = await User.find({age:{$lte:35}});
        // let result = await User.find({ name: { $in: ["ashim", "hari"] } });
        // let result = await User.find({ name: "hari",age:40 });
        // let result = await User.find(query);
        let result = await User.find({}).limit(brake).skip(((page-1)*2));
        res.status(200).json({
            success:true,
            message: "User read successfully",
            result: result
        })
    }

    catch(error){
        res.status(400).json({
            success: false,
            message:error.message
        })
    }
}

export let readUserDetails =async(req,res)=>{
    let userId= req.params.userId
    try{
       let result = await User.findById(userId) 
       res.status(200).json({
        success:true,
        message:"User read Successfully by ID",
        result: result
       })
    }

    catch(error){
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

export let updateUser= async(req,res)=>{
    let userId = req.params.userId
    let userData = req.body

    try{
        let result = await User.findByIdAndUpdate(userId, userData);
        res.status(201).json({
            success: true,
            message: "User updated successfully",
            result: result,
        });
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export let deleteUser = async(req,res)=>{
    let userId= req.params.userId
    try{
       let result = await User.findByIdAndDelete(userId) 
       res.status(200).json({
        success:true,
        message:"User deleted Successfully",
        result: result
       })
    }

    catch(error){
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

export let loginUser=async(req,res)=>{
    let email = req.body.email
    let password = req.body.password;

    try{
        let user = await User.findOne({email:email})
        let hashPassword =user.password;

        if (user ===null){
            res.json({
                success: false,
                message:"Email or password does not match"
            });
        }
        else{
            let isValidPassword = await bcrypt.compare(password,hashPassword)
            if(isValidPassword){
                let infoObj={
                    id:user._id //id contains all details like name address etc. so it is better to use id
                  }
                  let expiryInfo={
                    expiresIn:"365d"
                  };
                  
                  let token =jwt.sign(infoObj, secretKey, expiryInfo)
                  
                  res.json({
                    success:true,
                    message:"User logged in successfully",
                    result:token
                  }) 
                
            }
            else{
                res.json({
                    success: false,
                    message: "Email or Password doesn't match",
                })
            }
        }   
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }  
}

export let myProfile =async(req,res)=>{
    let id=req.id
   
    try {
        let result = await User.findById(id)
        
        res.json({
            success: true,
            message:"Profile read successfully",
            result:result
        })
    } catch (error) {
        res.json({
            success: false,
            message:error.message
        })
    }


}

export let updateProfile=async(req,res)=>{
    let id=req.id
    try {
        let userData = req.body
        delete userData.email
        delete userData.password
        let result= await User.findByIdAndUpdate(id,userData)

        res.json({
            success: true,
            message:"Profile updated successfully", 
            result:result
        })
        
    } catch (error) {
        res.json({
            success: false,
            message:error.message
        })  
    }
}

export let deleteProfile=async(req,res)=>{
    let id=req.id
    try {
        let result = await User.findByIdAndDelete(id)
        res.json({
            success: true,
            message:"Profile deleted successfully", 
            result:result
        })
    } catch (error) {
        res.json({
            success: false,
            message:error.message
        })  
    }
}


// statuscode
// success
// 2XX
// get , delete =>200
// post, patch => 201


// failure
// 4XX

// 404 => not found
// 409 => conflict 