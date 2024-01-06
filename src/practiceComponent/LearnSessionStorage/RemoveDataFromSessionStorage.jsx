import React from 'react'

const RemoveDataFromSessionStorage = () => {
   
  return (
    <div>
        <button onClick={()=>{
             sessionStorage.removeItem("token")
        }}>RemoveDataFromSessionStorage</button>
    </div>
  )
}

export default RemoveDataFromSessionStorage

//Session storage is the browser memory of particular url in particular tab(session)
//data will persist in the given session (that is data will be removed when tab closes)