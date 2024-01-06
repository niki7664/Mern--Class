import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReadAllProduct = () => {
  let [products, setProduct] = useState([]);
  let navigate= useNavigate()
  let getAllProducts= async()=>{
    let result = await axios({
      url : `http://localhost:8000/products`,
      method:"GET"
    })
    setProduct(result.data.result)
  }



  let deleteProduct = async (productId) => {
    try {
      await axios({
        url : `http://localhost:8000/products/${productId}`,
        method:"DELETE"
      })
      getAllProducts()

      toast.success("Product Deleted Successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      toast.error("An Error Occurred", {
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

  useEffect(()=>{
    getAllProducts()

  },[])


  return (
    <div>
      <ToastContainer></ToastContainer>
      {
        products.map((item,i)=>{
          return(
            <div key={i} style={{border:"solid red 3px", marginBottom:"20px"}}>
              <p>The product is: {item.name}</p>
              <p>The product price is: {item.price}</p>
              <p>The product quantity is: {item.quantity}</p>
              <button style={{marginRight:"20px"}}
              onClick={()=>{
                navigate(`/products/${item._id}`)
              }}  
              >View</button>

              <button style={{marginRight:"20px"}} 
              onClick={()=>{
                navigate(`/products/update/${item._id}`)
              }}>Edit</button>

              <button style={{marginRight:"20px"}} onClick={() => {deleteProduct(item._id)}} >Delete</button>

            </div>
          )
            
          
        })
      }

    </div>
  )
}

export default ReadAllProduct