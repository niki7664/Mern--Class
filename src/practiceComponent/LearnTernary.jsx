import React from 'react'

const LearnTernary = () => {
    let age = 10
    let marks=59
  return (
    <div>
        {/* {
         age<18?<div>Underage</div>
         :age>=18&&age<=60?<div>Adult</div>
         :<div>Old</div>
        }
        {
          marks<=39?<div>Fail</div>
          :marks>=40&&marks<=59?<div>Second Division</div>
          :marks>=60&&marks<=79?<div>First Division</div>
          :marks>=80&&marks<=100?<div>Distinction</div>
          :null

        } */}

        {
          age<18?<div>He cannot enter bar</div>
          :age>=18?<div>He can enter bar.</div>
          :null
        }
    </div>
   
  )
}

export default LearnTernary