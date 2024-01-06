import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from './Products/CreateProduct'

import CreateStudent from './Student/CreateStudent'
import ReadAllProduct from './Products/ReadAllProduct'
import ReadSpecificProduct from './Products/ReadSpecificProduct'
import ReadSpecificStudent from './Student/ReadSpecificStudent'
import ReadAllStudent from './Student/ReadAllStudent'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<div>This is home page</div>}></Route>
            <Route path="/products/create" element={<CreateProduct></CreateProduct>}></Route>
            <Route path="/products" element={<ReadAllProduct></ReadAllProduct>}></Route>
            <Route path="/products/:id" element={<ReadSpecificProduct></ReadSpecificProduct>}></Route>
            <Route path="/students/create" element={<CreateStudent></CreateStudent>}></Route>
            <Route path="/students" element={<ReadAllStudent></ReadAllStudent>}></Route>
            <Route path="/students/:id" element={<ReadSpecificStudent></ReadSpecificStudent>}></Route>
            <Route path="/*" element={<div>404 Page Not Found</div>}></Route>
        </Routes>
    </div>
  )
}

export default MyRoutes