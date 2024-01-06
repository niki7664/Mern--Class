import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

const NestingRoute = () => {
  return (
    //Give slash / to home
    //don't give / to others
    <div>
        <Routes>
            <Route
            path="/"
            element={
                <div>
                    <Outlet></Outlet>
                </div>
            }
            >
                <Route index element={<div>Home Page</div>}></Route>
                <Route path="*" element={<div>404 page</div>}></Route>
                <Route path="student" element={<div>Student Page</div>}></Route>
            </Route>
        </Routes>
    </div>
  )
}

export default NestingRoute