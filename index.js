// make an express application
// attach port to that application
import express, { json } from "express";
import jwt from "jsonwebtoken";
import connectToMongoDB from "./connecttoDB/connecttoMongoDB.js";
import bikeRouter from "./src/router/bikeRouter.js";
import collegeRouter from "./src/router/collegeRouter.js";
import firstRouter from "./src/router/firstRouter.js";
import productRouter from "./src/router/productRouter.js";
import reviewRouter from "./src/router/reviewRouter.js";
import schoolRouter from "./src/router/schoolRouter.js";
import studentRouter from "./src/router/studentRouter.js";
import traineeRouter from "./src/router/traineesRouter.js";
import userRouter from "./src/router/userRouter.js";
import vehicleRouter from "./src/router/vehicleRouter.js";
import webuserRouter from "./src/router/webuserRouter.js";
import fileRouter from "./src/router/fileRouter.js";
import imageRouter from "./src/router/imageRouter.js";
import { port } from "./src/constant.js";
import cors from "cors";
import webUserRouter from "./YT/src/Router/webUserRouter.js";

let expressApp = express(); // starts express application
expressApp.use(cors());//always place cors as top as jata hit haneko tesko tala dekhi ko api haru matra sabaile use garna milxa
expressApp.use(json());

expressApp.listen(port, () => {
  console.log(`express application is listening at port ${port}`);
});

connectToMongoDB()

expressApp.use("/firsts",firstRouter);
expressApp.use("/bikes",bikeRouter);
expressApp.use("/schools",schoolRouter)
expressApp.use("/vehicles",vehicleRouter)
expressApp.use("/students",studentRouter)
expressApp.use("/users",userRouter)
expressApp.use("/trainees",traineeRouter)
expressApp.use("/colleges",collegeRouter)
//expressApp.use("/webusers",webuserRouter)
expressApp.use("/products",productRouter)
expressApp.use("/reviews",reviewRouter)
expressApp.use(express.static("./public"));
expressApp.use("/files",fileRouter)
expressApp.use("/images",imageRouter)

//YT
expressApp.use("/web-users",webUserRouter)

// url = localhost:8000/product?address=gagalphedi
// url = route?query
// route = localhost:8000/product/a/b
// route = baserUrl/routeParameter1/routeParameter2

//---------------------------------------------------------------------------------------
//Hashing

//generate Password
// let password ="niki123"
// let hashPassword = await bcrypt.hash(password,10)
// console.log(hashPassword)

// let hashPassword="$2b$10$gqaqQZDJPXXy5e11JYVxxuP3DuAfYb6NQYYVM3AVLJ33bghLAJS/m"
// let password="niki123"
// let isValidPassword = await bcrypt.compare(password,hashPassword)
// console.log(isValidPassword)


// post email, password  =
// bak get email, password=
// find the user whose email is (postman email)=
// if not   => success:false, message: "Email or Password does not match"
// if user exist
//       check password match (using bcrypt)
//       if password does not math   => success:false, message: "Email or Password does not match"
//       if password match => success:true, message:User logged in successfully.

//-----------------------------------------------------------------------------

//Generating token
// let infoObj ={
//   name:"niki",
//   age:"24"
// };
// let infoObj={
//   id:"123456" //id contains all details like name address etc. so it is better to use id
// }

// let secretKey ="dw10";
// let expiryInfo={
//   expiresIn:"365d"
// };

// let token =jwt.sign(infoObj, secretKey, expiryInfo)

// console.log(token)

//-------------------------------------------------
//Verifying if token is valid
// let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibmlraSIsImFnZSI6IjI0IiwiaWF0IjoxNzAyMDIxOTQ4LCJleHAiOjE3MzM1NTc5NDh9.CYcafHjm40GfDtzFaMDrFAuutkiMw9hKg7z7pmsPps8"



// try{
//   let infoObj = jwt.verify(token,"dw10")
//   console.log(infoObj)

// }catch(error){
//   console.log(error.message)
// }

//to be verified
//token must be made from the secretkey
//must not expire

//if token is valid => infoObj
//if token is not valid => error



//http://localhost:8000/whatsapp.gif
//http://localhost:8000/img/slide1.jpg


// let files = [
//     {
//       destination: "./public",
//       filename: "abc.jpg",
//     },
//     {
//       destination: "./public",
//       filename: "nitan.jpg",
//     },
//     {
//       destination: "./public",
//       filename: "ram.jpg",
//     },
//   ];
  
  
  // [
  //   "http://localhost:8000/abc.jpg",
  //   "http://localhost:8000/nitan.jpg",
  //   "http://localhost:8000/ram.jpg",
  // ]

  // let links = files.map((value,i)=>{
  //   return (`http://localhost:8000/${value.filename}`)
  // })

  // console.log(links)


  //------------------------------------
  //send e,mail with link
  //generate token
  //generate frontend link that contains token
  //send mail