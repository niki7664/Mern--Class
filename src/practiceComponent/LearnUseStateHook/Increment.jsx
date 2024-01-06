import React, { useState } from 'react'

const Increment = () => {
  let [count,setCount]= useState(0)
  let [count2,setCount2]= useState(100)

  let handleIncrement=(e)=>{
    setCount(count + 1)
  }
 
  let handleIncrement2=(e)=>{
    setCount2(count2 + 1)
  }
    
     
  return (
    <div>
        Count : {count}
        <br></br>
        <button onClick={handleIncrement}>Increase Count</button>
        <br></br>
        Count2: {count2}
        <br></br>
        <button onClick={handleIncrement2}>Increase Count2</button>
    </div>
  )
}


export default Increment

