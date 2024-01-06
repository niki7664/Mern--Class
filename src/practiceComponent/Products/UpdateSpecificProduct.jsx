import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
  let[name,setName]=useState(" ")
  let[price,setPrice]=useState(" ")
  let[quantity,setQuantity]=useState(" ")
  let params= useParams()

  let getProduct = async () => {
    let result = await axios({
      url: `http://localhost:8000/products/${params.id}`,
      method: "GET",
    });
    let data= result.data.result
    setName(data.name)
    setPrice(data.price)
    setQuantity(data.quantity)
  };

  useEffect(() => {
    getProduct();
  }, []);
  
  let onSubmit=async  (e)=>{
    e.preventDefault()



    let data={
        name: name,
        price:price,
        quantity: quantity
    }

    try{
      let result =await axios({
        url: `http://localhost:8000/products/${params.id}`,
        method:"PATCH",
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

        <button type="submit">Update</button>


      </form>
    </div>
  )
}

export default UpdateProduct