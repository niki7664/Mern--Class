import { Webuser } from "../../schema/model.js"

//In searching only value matters but not its type
export let createWebuser = async(req,res)=>{
    let webuserData= req.body
    try{
        let result = await Webuser.create(webuserData)
        res.json({
            success: true,
            message: "Webuser created successfully"
        })
    }
    catch(error){
        res.json({
            success: false,
            message: error.message
        })
    }
}

export let readWebuser = async(req,res)=>{
    try{
        //Searching
        // let result = await Webuser.find({age:{$gt:18,$lt:35}})

        //Sorting --> Unlike JS mongodb sorting works for number
        // let result = await Webuser.find({}).sort("name") //ascending sort by name
        // let result = await Webuser.find({}).sort("-name") //descending sorting by name
        // let result = await Webuser.find({}).sort("name age") // ascending sort by name but if name is same sort it by age
        // let result = await Webuser.find({}).sort("name -age")// ascending sort by name but if name is same sort it by descending age

        //Select
        //find has control over the object
        //where as select has control over the object property

        let result = await Webuser.find({}).select("name age -_id")
        // let result = await Webuser.find({name}).select("age") //euta kunai name ko age matra dekhauxa
        res.json({
            success: true,
            message: "Webuser read successfully",
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

export let readDetailsWebuser = async (req,res)=>{
    let webuserId = req.params.webuserId
    try{
        let result = await Webuser.findById(webuserId)
        res.json({
            success: true,
            message: "Webuser Details read successfully",
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

export let updateWebuser= async(req,res)=>{
    let userId=req.params.webuserId
    let userData=req.body
    try{
        let result = await Webuser.findByIdAndUpdate(userId,userData)
        res.json({
            success:true,
            message:"Webuser updated successfully",
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

export let deleteWebuser =async(req,res)=>{
    let webuserId=req.params.webuserId
    
    try{
        let result= await Webuser.findByIdAndDelete(webuserId)
        res.json({
            success: true,
            message:"Webuser Deleted successfully",
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
