import React, { useState } from 'react'

const LearnUseStateName = () => {
    let [name,setName]=useState(true)

    let handleClick=(isVisible)=>{
        return(e)=>{
            setName(isVisible)
        }
      }

  return (
    <div>
        <hr></hr>
        {name?<h2>My name is Niki</h2> : null}
        <button onClick={handleClick(true)}>Show Component</button>
        
        <button onClick={handleClick(false)}>Hide Component</button>
    </div>
  )
}

export default LearnUseStateName