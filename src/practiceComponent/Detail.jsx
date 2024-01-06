import React from 'react'

const Detail = (props) => {
    console.log(props)
  return (
    <div>
        My name is {props.name}
        <br></br>
        Address is {props.address}
        <br></br>
        Age is {props.age}
    </div>
  )
}

export default Detail