import React from 'react'

const GetLocalStorage = () => {
    console.log(localStorage.getItem("token"))
   console.log( localStorage.getItem("name"))
    console.log(localStorage.getItem("age"))
    console.log(localStorage.getItem("isMarried"))
  return (
    <div>GetLocalStorage</div>
  )
}

export default GetLocalStorage