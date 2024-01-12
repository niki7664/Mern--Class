//user =>name,email,isMarried
//schema
//model
//controller
//router
//index

import { Schema } from "mongoose";

let userSchema =Schema({
    name:{
        type:String,
        required:[true,"name field is required"]
    },
    age:{
        type:Number,
        required: false,
    },
    email:{
        type:String,
        unique:true,
        required: [true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"Password field is required"]
    },
    isMarried:{
        type:Boolean,
        required:[true,"IsMarried field is required"]
    },
    profileImage:{
        type:String,
        required:[true,"profileImage field is required"]
    },
    resume:{
        type:String,
        required:[true,"resume field is required"]
    },
},
{
    timestamps: true
})

export default userSchema