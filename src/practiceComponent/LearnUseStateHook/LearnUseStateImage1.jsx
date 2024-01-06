import React, { useState } from 'react'

const LearnUseStateImage = () => {
    let [image,setImage]= useState(true)
    // let showImage =(e)=>{
    //     setImage(true)
    // }
    // let hideImage =(e)=>{
    //     setImage(false)
    // }

  let handleImage=(isVisible)=>{
    return(e)=>{
        setImage(isVisible)
    }
  }




  return (
    <div>
        {image?<img src="./logo192.png" alt="logo"></img> :null}
        <br></br>
        <button onClick={handleImage(true)} >Show Image</button>
        <br></br>
        <button onClick={handleImage(false)} id="hide">Hide Image</button>
    </div>
  )
}

export default LearnUseStateImage

//handleImage -> define function as (e)=>{} -> use when you don't need to pass value
//handleImage() -> ()=>{return((e)=>{})}-> use when you need to pass value
