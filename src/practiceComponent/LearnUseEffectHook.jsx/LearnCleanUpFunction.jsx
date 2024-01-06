import React, { useEffect, useState } from 'react'

const LearnCleanUpFunction = () => {
    let [count, setCount]=useState(0)

    useEffect(()=>{
        console.log("I am use Effect")

        return()=>{
            console.log("I am cleanup function")
        }
    },[count])

    /*
    Cleanup function are those function which is returned by useEffect
    Cleanup function does not execute in first render but from 2nd render the cleanup function will execute if useEffect function runs
    
    What happen when useEffect function gets executed?
    First the cleanup function will run then the code above it will execute

    When component gets unmount nothing gets executed except cleanup function

    component mount-> component show -> start in 1st render

    LIFE CYCLE OF COMPONENT
    -----------------------
    ->cOMPONENT DID MOUNT (FIRST RENDER)
    -useEffect fun will run

    ->component did update(2nd render)(when state variable changes)
    -useEffect fun will run only if its dependency changes
    
    ->Component did unmount (component removed)
    -Nothing gets executed
    -But clean up function will execute
    */
  return (
    <div>
        count1 is {count}
        <br></br>
        <button onClick = {()=>{
            setCount(count+1)
        }}> Increase the Count </button>
    </div>
  )
}

export default LearnCleanUpFunction