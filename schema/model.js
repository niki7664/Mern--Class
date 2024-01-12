import { model } from "mongoose";
import studentSchema from "./studentSchema.js"; //if anything is import from file, .js is important. We can recognize as it starts by './'
import teacherSchema from "./teacherSchema.js";
import userSchema from "./userSchema.js";
import traineeSchema from "./traineeSchema.js";
import collegeSchema from "./collegeSchema.js";
import webuserSchema from "./webuserSchema.js";
import productSchema from "./productSchema.js";
import reviewSchema from "./reviewSchema.js";
import fileSchema from "./fileSchema.js";




//------------------------------------

//model name should always be singular
//the first letter should be capital as shown in 'Student'
//variable name and model name should match.
//as 'Student' matches in, let Student = model("Student", studentSchema)

export let Student = model("Student", studentSchema)
export let Teacher = model("Teacher", teacherSchema)
export let User=model("User",userSchema)
export let Trainee=model("Trainee",traineeSchema)
export let College = model("College",collegeSchema)
export let Webuser = model("Webuser",webuserSchema)
export let Product = model("Product",productSchema)
export let Review = model("Review",reviewSchema)
export let File=model("File",fileSchema)