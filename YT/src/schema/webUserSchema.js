import { Schema } from "mongoose";

let webUserSchema= Schema({
    fullName:{
        type:String,
        required:[true,"fullName field is required"]
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
    dob:{
        type:Date,
        required:[true,"dob field is required"],
    },
    gender:{
        type:String,
        required:[true,"gender field is required"]
    },
    role:{
        type:String,
        required:[true,"role field is required"]
    },
    isVerifiedEmail:{
        type:Boolean,
        required:[true,"isVerifiedEmail field is required"]
    },
},
{
    timestamps: true
}
)

export default webUserSchema;