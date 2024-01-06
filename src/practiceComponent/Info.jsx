import React from 'react'

const Info = ({name,age,fatherDetail,favFood}) => {

  return (
    <div>
       {name}
       <br></br>
       {age}
       <br></br>
       {fatherDetail.fname}
       <br></br>
       {fatherDetail.fage}
       <br></br>
       {favFood}
    </div>
  )
}

export default Info