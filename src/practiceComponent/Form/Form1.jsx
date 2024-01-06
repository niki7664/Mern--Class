import React, { useState } from 'react'

const Form1 = () => {
   
    
    let[name,setName]=useState("")
    let[surname,setSurname]=useState("")
    let[email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let[phone,setPhone]=useState("")
    let[dob,setDob]=useState("")
    let[description,setDescription]=useState("")


    let onSubmit=(e)=>{
        e.preventDefault()

        let data={
            name: name,
            surname: surname,
            email: email,
            password: password,
            phone: phone,
            description: description
        }
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div>
            <label htmlFor="name">First Name : </label>
            <input 
            type="text" 
            placeholder="Enter Your Name" 
            id="name"
            value={name}
            onChange={(e)=>{
                //console.log(e.target.value)
                setName(e.target.value)
            }}
            ></input>
            </div>

            <div>
            <label htmlFor="surname">Surname : </label>
            <input 
            type="text" 
            placeholder="Enter Your SurName" 
            id="surname"
            value={surname}
            onChange={(e)=>{
                setSurname(e.target.value)
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
            <label htmlFor="phone">Phone : </label>
            <input 
            type="tel" 
            placeholder="Enter Your Phone Number" 
            id="phone"
            value={phone}
            onChange={(e)=>{
                setPhone(e.target.value)
            }}
            ></input>
            </div>

            <div>
            <label htmlFor="dob">Phone : </label>
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
                <label htmlFor="description">Description : </label>
                <br></br>
                <textarea
                placeholder="Any Messages?"
                id="description"
                value={description}
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                ></textarea>
            </div>


            <button type="submit">Proceed</button>
        </form>
    </div>

  )
}

export default Form1