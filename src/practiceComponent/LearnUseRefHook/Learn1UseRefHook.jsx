import React, { useRef } from 'react'

const Learn1UseRefHook = () => {
    let ref1=useRef()
    let ref2=useRef()
    let ref3=useRef()
  return (
    <div>
        <button 
        onClick={()=>{
            ref3.current.focus()
        }}
        >Focus Input</button>
        <button 
        onClick={()=>{
            ref3.current.blur()
        }}
        
        >Blur Input</button>
        <button
        onClick={()=>{
            ref1.current.style.backgroundColor="red"
            ref1.current.style.color="white"
        }}
        >Div 1</button>
        <button
        onClick={()=>{
            ref2.current.style.backgroundColor="blue"
            ref2.current.style.color="white"
        }}
        >Div 2</button>
        <div ref={ref1}>Hello I'm Div 1</div>
        <div ref={ref2}>Hello I'm Div 2</div>
        <div>Name</div>
        <input ref={ref3}></input>
    </div>
  )
}

export default Learn1UseRefHook