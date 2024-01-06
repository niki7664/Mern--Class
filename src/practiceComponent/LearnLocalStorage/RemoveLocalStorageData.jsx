import React from 'react'

const RemoveLocalStorageData = () => {
  return (
    <div>
        <button
        onClick={()=>{
           localStorage.removeItem("token") 
        }}
        >Remove Token</button>

    <button
        onClick={()=>{
           localStorage.removeItem("name") 
        }}
        >Remove Name</button>

    <button
        onClick={()=>{
           localStorage.removeItem("age") 
        }}
        >Remove Age</button>

    <button
        onClick={()=>{
           localStorage.removeItem("isMarried") 
        }}
        >Remove isMarried</button>
    </div>
  )
}

export default RemoveLocalStorageData