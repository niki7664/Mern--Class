import { Router } from "express";

let bikeRouter = Router();

bikeRouter
    .route("/")
    .post(
        (req,res,next)=>{
        console.log("I am middleware 1")
        next("a");
        },
        (err,req,res,next)=>{
            console.log("I am error middleware 1")
            next();
            
        },
        (req,res,next)=>{
            console.log("I am middleware 2")
            next("a");
        },
        (err,req,res,next)=>{
            console.log("I am error middleware 2")
            next()
            
        },
        (req,res)=>{
            console.log("I am middleware 1")
        });

        //console.log le terminal ma dehauxa
        //req.json le postman ma dekhauxa


export default bikeRouter;