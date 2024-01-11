import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AdminLogin = () => {
    let navigate= useNavigate()
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
   
    let onSubmit=async (e)=>{
        e.preventDefault()

        let data={
            email: email,
            password: password 
        }
       
        try{
            let result=await axios({
                url:`http://localhost:8000/web-users/login`,
                method:"POST",
                data:data
            })

            console.log(result)

            let token=result.data.data
            localStorage.setItem("token",token)
           navigate("/admin")
          
        }catch(error){
            toast.error(error.response.data.message);

        }  
        
    }

  return (
    <div>
        <ToastContainer></ToastContainer>
        <form onSubmit={onSubmit}>

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


            <button type="submit">Login</button>
        </form>
    </div>

  )
}

export default AdminLogin