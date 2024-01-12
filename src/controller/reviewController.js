import { Review } from "../../schema/model.js"


export let createReview = async(req,res)=>{
    let reviewData= req.body
    try{
        let result = await Review.create(reviewData)
        res.json({
            success: true,
            message: "Review created successfully"
        })
    }
    catch(error){
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readReview = async(req,res)=>{
    try{
        let result = await Review.find({}).populate("productId" ,"name price -_id").populate("userId","name email -_id")
        res.json({
            success: true,
            message: "Review read successfully",
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

export let readDetailsReview = async (req,res)=>{
    let reviewId = req.params.reviewId
    try{
        let result = await Review.findById(reviewId)
        res.json({
            success: true,
            message: "Review Details read successfully",
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

export let updateReview= async(req,res)=>{
    let userId=req.params.reviewId
    let userData=req.body
    try{
        let result = await Review.findByIdAndUpdate(userId,userData)
        res.json({
            success:true,
            message:"Review updated successfully",
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

export let deleteReview =async(req,res)=>{
    let reviewId=req.params.reviewId
    
    try{
        let result= await Review.findByIdAndDelete(reviewId)
        res.json({
            success: true,
            message:"Review Deleted successfully",
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
