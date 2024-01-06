import React from 'react'

const AddDataToLocalStorage = () => {
    let token="134567o67"
    localStorage.setItem("token",token)
    localStorage.setItem("name","niki")
    localStorage.setItem("age","24")
    localStorage.setItem("isMarried","false")
  return (
    <div>AddDataToLocalStorage</div>
  )
}

export default AddDataToLocalStorage


//Local storage is the browser's memory for a particular URL
//The data in a local storage persist even if the session ends.(browser/tab close)