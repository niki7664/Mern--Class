import { Trainee } from "../../schema/model.js"

export let createTrainee = async(req,res)=>{
    let traineeData= req.body
    try{
        let result = await Trainee.create(traineeData)
        res.json({
            success: true,
            message: "Trainee created successfully"
        })
    }
    catch(error){
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readTrainee = async(req,res)=>{
    try{
        let result = await Trainee.find({})
        res.json({
            success: true,
            message: "Trainee read successfully",
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

export let readDetailsTrainee = async (req,res)=>{
    let traineeId = req.params.traineeId
    try{
        let result = await Trainee.findById(traineeId)
        res.json({
            success: true,
            message: "Trainee Details read successfully",
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

export let updateTrainee= async(req,res)=>{
    let userId=req.params.traineeId
    let userData=req.body
    try{
        let result = await Trainee.findByIdAndUpdate(userId,userData)
        res.json({
            success:true,
            message:"Trainee updated successfully",
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

export let deleteTrainee =async(req,res)=>{
    let traineeId=req.params.traineeId
    
    try{
        let result= await Trainee.findByIdAndDelete(traineeId)
        res.json({
            success: true,
            message:"Trainee Deleted successfully",
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
