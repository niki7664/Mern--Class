import { Schema } from "mongoose";
let collegeSchema = Schema({
    name: {
        type:String,
        required:[true, "name field is required"]
    },
   location:{
        type: String,
        required:[true,"location field is required"]
   }
},{
    timestamps: true
})
export default collegeSchema