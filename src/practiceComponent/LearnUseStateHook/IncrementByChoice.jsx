import React, { useState } from 'react'

const IncrementByChoice = () => {
    let [count,setCount]=useState(0);

    let handleClick=(incrementAmount)=>{
      return(e)=> {
        setCount((prevCount) => prevCount + incrementAmount);
    }
    }

  return (
    <div>
        <hr></hr>
        <h2>Count:{count}</h2>
        <br></br>
        <button onClick={handleClick(2)}>IncrementBy2</button>
        <br></br>
        <button onClick={handleClick(100)}>IncrementBy100</button>
        <br></br>
        <button onClick={handleClick(1000)}>IncrementBy1000</button>

    </div>
  )
}

export default IncrementByChoice