import { Schema } from "mongoose"


let webuserSchema =Schema({
    name:{
        type: String,
        required:[true,"name field is required"],
        //uppercase: true ,//converts all characters into uppercase
        //lowercase: true ,//converts all characters into lowercase
        //minLength: 2,
        //maxLength: 20,
        //trim: true, //to remove aagadi paxadi ko spaces
        validate: (value) => {
            let isValid = /^[a-zA-Z0-9]{2,20}$/.test(value);
      
            if (!isValid) {
              throw new Error(
                "name should not contain other than alphabet and number and must be at least 2 character and at most 20 character long."
              );
            }
          },
        
    },
    age:{
        type:Number,
        required:[true,"age field is required"],
        min : 18, //min age
        max: 70, //max age

        // validate: (value) => {
        //     if (value === 30) {
        //       throw new Error("age can not be 30");
        //     }
        //   },
    },
    password:{
        type:String,
        required:[true,"password field is required"]
    },
    phoneNumber:{
        type:Number,
        required:[true,"phoneNumber field is required"],
        // min: 10000000000,
        // max:99999999999, 
        //another method
        validate: (value) => {
            let strValue = String(value);
            let strLen = strValue.length;
            if (strLen !== 10) {
              let error = new Error("phoneNUmber  must be exact 10 character long");
              throw error;
            }
          },

    },
    roll:{
        type:Number,
        required:[true,"roll field is required"]
    },
    isMarried:{
        type:Boolean,
        required:[true,"isMarried field is required"]
    },
    spouseName:{
        type:String,
        required:[true,"spouseName field is required"]
    },
    Email:{
        type:String,
        required:[true,"Email field is required"],
        validate: (value) => {
            let isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
              value
            );
            if (!isValid) {
              throw new Error("email not valid.");
            }
          },
        },
    Gender:{
        type:String,
        required:[true,"Gender field is required"],
        // validate: (value) => {
    //   if (value === "male" || value === "female" || value === "other") {
    //   } else {
    //     throw new Error("gender can not ber other than male, female , other");
    //   }
    // },
    enum: {
        values: ["male", "female", "other"],
        message: (notEnum) => {
          return `${notEnum.value} is not valid enum`;
        },
      },
    },
    DOB:{
        type:Date,
        required:[true,"DOB field is required"]
    },
    location:{
        country:{
            type:String,
            required:[true,"Country field is required"]
        },
        exactLocation:{
            type:String,
            required:[true,"exactLocation field is required"]
        }
    },
    favTeacher:[
        {
            type:String,
            required:[true,"favTeacher field is required"]   
        }
    ],
    favSubject:[
        {
            bookName: {
                type:String,
            required:[true,"bookName field is required"] 
            }
        },
        {
            bookAuthor: {
                type:String,
            required:[true,"bookAuthor field is required"] 
            }
        },
    ]

})

export default webuserSchema

/* 
schema design->objec banaunu ko sathai validation and manipulation pani garna milxa
-----------------
manipulation
  uppercase
  lowercase
  trim
  default value
--------------------
validation
->default validation
-> custom validation
*/