import React from 'react'

let handleClick=(e)=>{
  console.log("Button is clicked.")
}

const ButtonClick = () => {
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default ButtonClick