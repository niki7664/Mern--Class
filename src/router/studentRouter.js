import { Router } from "express";
import { Student } from "../../schema/model.js";


let studentRouter = Router();

studentRouter
    .route("/")
    .post(async(req,res)=>{

        let studentData=req.body;

        try{
            let result = await Student.create(studentData);
            res.status(200).json({
                success: true,
                message: "Student created successfully.",
            });
        }
        catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            });  
        }
    })
    .get(async(req,res)=>{
        try{
            let result = await Student.find({});
            res.json({
                success:true,
                message: "Student read successfully",
                result: result
            })
        }

        catch(error){
            res.json({
                success: false,
                message:error.message
            })
        }
    })

studentRouter
    .route("/:studentId") //localhost:8000/students/:studentId
    .delete(async(req,res)=>{
        let studentId= req.params.studentId
        try{
           let result = await Student.findByIdAndDelete(studentId) 
           res.json({
            success:true,
            message:"Student deleted Successfully",
            result: result
           })
        }

        catch(error){
            res.json({
                success:false,
                message: error.message
            })
        }
    })

  
//read data using ID
    .get(async(req,res)=>{
        let studentId= req.params.studentId
        try{
           let result = await Student.findById(studentId) 
           res.json({
            success:true,
            message:"Student read Successfully by ID",
            result: result
           })
        }

        catch(error){
            res.json({
                success:false,
                message: error.message
            })
        }
    })

    .patch(async(req,res)=>{
        let studentId = req.params.studentId
        let studentData = req.body

        try{
            let result = await Student.findByIdAndUpdate(studentId, studentData);
            res.json({
                success: true,
                message: "student updated successfully",
                result: result,
            });
        }catch(error){
            res.json({
                success: false,
                message: error.message
            })
        }
    });
export default studentRouter;

//Data can be sent through following:
//id => params
//aru data=>body
//aarko query bata ni pathauna milxa

 



