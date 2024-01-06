import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReadAllStudent = () => {
  let [students, setStudent] = useState([]);
  let navigate= useNavigate()
  let getAllStudents= async()=>{
    let result = await axios({
      url : `http://localhost:8000/students`,
      method:"GET"
    })
    setStudent(result.data.result)
  }

  useEffect(()=>{
    getAllStudents()
  },[])

  let deleteStudent =async (productId)=>{
    try{
      await axios({
        url: `http://localhost:8000/students/${productId}`,
        method: "DELETE"
      })
      getAllStudents()

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

    }catch(error){
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




  return (
    <div>
      <ToastContainer></ToastContainer>
      {
        students.map((item,i)=>{
          console.log(item)
          return(
            <div key={i} style={{border:"solid red 3px", marginBottom:"20px"}}>
              <p>Student name: {item.name}</p>
              <p>Age: {item.age}</p>
              <p>Are you married: {item.isMarried? 'Yes' : 'No'}</p>
              <button style={{marginRight:"20px"}}
              onClick={()=>{
                navigate(`/students/${item._id}`)
              }}  
              >View</button>
              <button style={{marginRight:"20px"}}
              onClick={()=>{
                navigate(`/students/update/${item._id}`)
              }}
              >Edit</button>
              <button style={{marginRight:"20px"}} onClick={()=>{deleteStudent(item._id)}}>Delete</button>

            </div>
          )
            
          
        })
      }

    </div>
  )
  }

export default ReadAllStudent