import React from 'react'

const LearnMap1 = () => {
    let names=["Niki","Anjali","Kriti"]
    let printNames=()=>{
        let list=names.map((item,i)=>{
            return <div>My bestfriend is {item}</div>
        })
        return list
    }
    

  return (
    <div>
        {
            // names.map((value,i)=>{
            //     return(<div>My bestfriend is {value}</div>)
            // })
            printNames()
        }
    </div>
  )
}

export default LearnMap1