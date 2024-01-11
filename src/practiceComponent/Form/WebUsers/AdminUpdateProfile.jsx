import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const AdminUpdateProfile = () => {
   
    
    let[fullName,setFullName]=useState("")
    let[dob,setDob]=useState("")
    let[gender,setGender]=useState("Male")
    let navigate=useNavigate()
    let token =localStorage.getItem("token")
   
    let onSubmit=async (e)=>{
        e.preventDefault()

        let data={
            fullName: fullName,
            dob: dob,
            gender:gender  
        }

        try{
            let result=await axios({
                url:`http://localhost:8000/web-users/update-profile`,
                method:"PATCH",
                data:data,
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            navigate("/admin/my-profile")

          
        }catch(error){
            toast.error(error.response.data.message);

        }  
        
    }

    let genders = [
        {label:"Male", value:"male"},
        {label:"Female", value:"female"},
        {label:"Other", value:"other"},
    
      ]

      let getAdminProfile=async ()=>{
        

        try {
            let result=await axios({
                url:`http://localhost:8000/web-users/my-profile`,
                method:"GET",
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            let data=result.data.data
            setFullName(data.fullName)
            setDob(data.dob)
            setGender(data.gender)

            
        } catch (error) {
            
        }

    }
    useEffect(()=>{
        getAdminProfile()
    },[])
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


            <button type="submit">Update</button>
        </form>
    </div>

  )
}

export default AdminUpdateProfile