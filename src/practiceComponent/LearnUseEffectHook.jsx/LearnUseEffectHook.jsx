import React, { useEffect, useState } from 'react'

const LearnUseEffectHook = () => {
    let[count,setCount]=useState(0)
    let[count2,setCount2]=useState(100)

    //it execute for 1st render
    //from 2nd render the function will only execute if count or count2 variable is changed
    useEffect(()=>{
      console.log("I am useEffect function")
    },[count,count2])


    //it execute for 1st render
    //from 2nd render the function will only execute if count variable is changed
    useEffect(()=>{
      console.log("I am useEffect 2")
    },[count])


    //it executes for 1st render only
    useEffect(()=>{
      console.log("I am useEffect 3")
    },[])


    //it executes for each render
    useEffect(()=>{
      console.log("I am useEffect 4")
    })


  return (
    <div>
        Count is {count}
        <button onClick={(e)=>{
            setCount(count+1)
        }}>Increment</button>
        Count2: {count2}
        <button onClick={(e)=>{
            setCount2(count+1)
        }}>Increment</button>

    </div>
  )
}

export default LearnUseEffectHook