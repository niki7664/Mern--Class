import { College } from "../../schema/model.js"


export let createCollege = async(req,res)=>{
    let collegeData= req.body
    try{
        let result = await College.create(collegeData)
        res.json({
            success: true,
            message: "College created successfully",
            result: result
        })
    }
    catch(error){
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readCollege = async(req,res)=>{
    try{
        let result = await College.find({})
        res.json({
            success: true,
            message: "College read successfully",
            result: result
        })
    }
    catch(error){
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readDetailsCollege = async (req,res)=>{
    let collegeId = req.params.collegeId
    try{
        let result = await College.findById(collegeId)
        res.json({
            success: true,
            message: "College Details read successfully",
            result: result
        })
    }
    catch(error){
        res.json({
            success: false,
            message: message.error
        })
        
    }
}

export let updateCollege= async(req,res)=>{
    let collegeId=req.params.collegeId
    let collegeData=req.body
    try{
        let result = await College.findByIdAndUpdate(collegeId,collegeData)
        res.json({
            success:true,
            message:"College updated successfully",
            result:result
        })
    }
    catch(error){
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let deleteCollege =async(req,res)=>{
    let collegeId=req.params.collegeId
    
    try{
        let result= await College.findByIdAndDelete(collegeId)
        res.json({
            success: true,
            message:"College Deleted successfully",
            result: result
        })
    }
    catch(error){
            res.json({
                success: false,
                message: error.message
            })
    }
} 
