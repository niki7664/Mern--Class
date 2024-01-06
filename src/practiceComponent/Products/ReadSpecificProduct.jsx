import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

const ReadSpecificProduct = () => {
  // let params =useParams()
  //   console.log(params)

  //   let [query] = useSearchParams()

  //   console.log(query.get("name"))
  //   console.log(query.get("isMarried"))

  //   let navigate=useNavigate()
  let params = useParams();

  let [product, setProduct] = useState({});

  let getProduct = async () => {
    let result = await axios({
      url: `http://localhost:8000/products/${params.id}`,
      method: "GET",
    });
    setProduct(result.data.result);
  };
  console.log(params.id)

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <p>product name is {product.name}</p>
      <p>product price is NRs.{product.price}</p>
      <p>product quantity is {product.quantity}</p>
    </div>
  );
};

export default ReadSpecificProduct