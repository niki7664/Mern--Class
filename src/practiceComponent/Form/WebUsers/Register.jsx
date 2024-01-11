import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
   
    
    let[fullName,setFullName]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let[dob,setDob]=useState("")
    let[gender,setGender]=useState("Male")
   
    let onSubmit=async (e)=>{
        e.preventDefault()

        let data={
            fullName: fullName,
            email: email,
            password: password,
            dob: dob,
            gender:gender  
        }
        data={
            ...data,
            role:"Admin"
        }

        try{
            let result=await axios({
                url:`http://localhost:8000/web-users`,
                method:"POST",
                data:data
            })

            toast.success("A link has been sent to your email.Please click on the link to verify your email.");
    
            setFullName("")
            setEmail("")
            setPassword("")
            setDob("")
            setGender("")
            
          
        }catch(error){
            toast.error(error.response.data.message);

        }  
        
    }

    let genders = [
        {label:"Male", value:"male"},
        {label:"Female", value:"female"},
        {label:"Other", value:"other"},
    
      ]
  return (
    <div>
        <ToastContainer></ToastContainer>
        <form onSubmit={onSubmit}>
            <div>
            <label htmlFor="fullName">Full Name : </label>
            <input 
            type="text" 
            placeholder="Enter Your Full Name" 
            id="fullName"
            value={fullName}
            onChange={(e)=>{
                //console.log(e.target.value)
                setFullName(e.target.value)
            }}
            ></input>
            </div>

            <div>
            <label htmlFor="email">Email : </label>
            <input 
            type="email" 
            placeholder="Enter Your Email" 
            id="email"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            ></input>
            </div>

            <div>
            <label htmlFor="password">Password : </label>
            <input 
            type="password" 
            placeholder="Enter Your Password" 
            id="password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            ></input>
            </div>

            <div>
            <label htmlFor="dob">DOB : </label>
            <input 
            type="date" 
            placeholder="Enter Your DOB" 
            id="dob"
            value={dob}
            onChange={(e)=>{
                setDob(e.target.value)
            }}
            ></input>
            </div>

            <div>
            <label>Gender</label>
                <br></br>
            
            {
                genders.map((item,i)=>{
                    return (
                      <>
                        <label htmlFor={item.value}>{item.label}</label>
                        <input 
                        type="radio" 
                        id={item.value} 
                        value={item.value} 
                        checked={gender === item.value}
                        onChange={(e)=>{
                          setGender(e.target.value);
                        }}
                        ></input>
                      </>
                    )
                })
            }
        </div>


            <button type="submit">Proceed</button>
        </form>
    </div>

  )
}

export default Register