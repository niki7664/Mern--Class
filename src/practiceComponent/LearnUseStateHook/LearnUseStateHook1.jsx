import React, { useState } from 'react'

const LearnUseStateHook1 = () => {
    //To define variable we use different method from now onwards
    let [name, setName] = useState("niki")
    let [age,setAge]= useState(24)
    let handleClick = (e)=>{
        setName("Oshin")
    }
    let handleAge = (e)=>{
        setAge(17)
    }
  return(
    <div>
        my name is {name}
        <button onClick={handleClick}>Change Name</button>
        <br></br>
        My age is {age}
        <button onClick={handleAge}>Change Age</button>
    </div>
  ) 

}

export default LearnUseStateHook1