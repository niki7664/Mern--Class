import React, { useState } from 'react'

const Toggle = () => {
    let [image,showImage] = useState(true)
    let handleToggle=(e)=>{
        if(image===true){
            showImage(false)
        }
        else{
            showImage(true)
        }

    }
  return (
    <div>
        {image?<img src="./logo192.png" alt="logo"></img> :null}
        <button onClick={handleToggle} >
            {image===true?"Hide" :"Show"}
        </button>
        
    </div>
  )
}

export default Toggle