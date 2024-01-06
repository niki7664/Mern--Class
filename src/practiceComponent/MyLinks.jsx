import React from 'react'
import { NavLink } from 'react-router-dom'

const MyLinks = () => {
  return (
    <div>
        <NavLink to="/products/create" style={{marginRight:"20px"}}>Create product</NavLink>
        <NavLink to="/products" style={{marginRight:"20px"}}>Product</NavLink>
        <NavLink to="/students/create" style={{marginRight:"20px"}}>Create student</NavLink>
        <NavLink to="/students" style={{marginRight:"20px"}}>Students</NavLink>
    </div>
  )
}

export default MyLinks