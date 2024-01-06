import React, { useState } from 'react'

const WhyUseState = () => {
    let [name,setName]= useState("niki")

    console.log("******************")
  return (
    <div>
        {name}
        <button onClick={()=>{
            setName("Anjali")
        }}>Change name</button>
        
    </div>
  )
}

export default WhyUseState