import React, { useState } from 'react'

const LearnUseStateImage = () => {
    let [image,setImage]= useState(true)
    let showImage =(e)=>{
        setImage(true)
    }
    let hideImage =(e)=>{
        setImage(false)
    }


  return (
    <div>
        {image?<img src="./logo192.png" alt="logo"></img> :null}
        <br></br>
        <button onClick={showImage}>Show Image</button>
        <br></br>
        <button onClick={hideImage}>Hide Image</button>
    </div>
  )
}

export default LearnUseStateImage