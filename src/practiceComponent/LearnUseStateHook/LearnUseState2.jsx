import React, { useState } from 'react'

const LearnUseState2 = () => {
    let [count,setCount]= useState(0)
    let increament =()=>{
        
        if (count<10 ){

            setCount(count+1)
                
        }

    }
    let decreament =()=>{
        if (count>0){
            setCount(count-1)
        }
        
    }
    let reset=()=>{
        setCount(0)
    }

        
  return (
    <div>
        {count}
        <br></br>
        <button onClick={increament}>Increase</button>
        <br></br>
        <button onClick={decreament}>Decrease</button>
        <br></br>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default LearnUseState2;