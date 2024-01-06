import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const CreateProduct = () => {
  let[name,setName]=useState(" ")
  let[price,setPrice]=useState(" ")
  let[quantity,setQuantity]=useState(" ")

  let onSubmit=async  (e)=>{
    e.preventDefault()

    let data={
        name: name,
        price:price,
        quantity: quantity
    }

    try{
      let result =await axios({
        url: "http://localhost:8000/products",
        method:"POST",
        data:data
      })
      console.log(result)
      setName("")
      setPrice("")
      setQuantity("")
      //toast("Product created Successfully")
      toast.success(result.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }catch(error){
      toast.error(error.response.data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
}

  return (
    <div>
      <ToastContainer />
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Product Name: </label>
          <input
          type="text" 
          placeholder="Enter Product Name" 
          id="name"
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}      
          ></input>
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input
          type="number"
          placeholder="Enter Price" 
          id="price"
          value={price}
          onChange={(e)=>{
            setPrice(e.target.value)
          }}      
          ></input>
        </div>
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input
          type="number"
          placeholder="Enter Quantity" 
          id="quantity"
          value={quantity}
          onChange={(e)=>{
            setQuantity(e.target.value)
          }}      
          ></input>
        </div>

        <button type="submit">Proceed</button>


      </form>
    </div>
  )
}

export default CreateProduct