import React, { useState } from 'react'

const Form3 = () => {

    let[day,setDay]=useState("day3")

    let[gender,setGender]=useState("Male")

let onSubmit=(e)=>{
    e.preventDefault()

    let data={
        day: day,
        gender: gender
    }
    console.log(data)
}

let days = [
    {
      label: "Sunday",
      value: "day1",
    },
    {
      label: "Monday",
      value: "day2",
    },
    {
      label: "Tuesday",
      value: "day3",
    },
    {
      label: "Wednesday",
      value: "day4",
    },
    {
      label: "Thursday",
      value: "day5",
    },
    {
      label: "Friday",
      value: "day6",
    },
    {
      label: "Saturday",
      value: "day7",
    },
  ];

  let genders = [
    {label:"Male", value:"male"},
    {label:"Female", value:"female"},
    {label:"Other", value:"other"},

  ]


  return (
    <div>
        <form onSubmit={onSubmit}>
        <div>
        <label>Days: </label>
            <select
            value={day}
            onChange={(e)=>{
                setDay(e.target.value)
            }}
            >
            
            {
                days.map((item,i)=>{
                    return (<option value={item.value} key={i}> {item.label}</option>)
                  })
            }


            {/* <option value="day1">Sunday</option>
            <option value="day2">Monday</option>
            <option value="day3">Tuesday</option>
            <option value="day4">Wednesday</option>
            <option value="day5">Thursday</option>
            <option value="day6">Friday</option>
            <option value="day7">Saturday</option> */}
              
            </select>

        </div>

        {/* <div>
            <label>Gender: </label>
        <select
             value={gender}
             onChange={(e)=>{
                 setGender(e.target.value)
             }}
            >
            {
                genders.map((item,i)=>{
                    return (<option value={item.value} key={i}>{item.label}</option>)
                  })
            }
            </select>
        </div> */}

        {/* <div>
          <label>Gender</label>
          <br></br>

          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>

          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>

          <label htmlFor="other">Other</label>
          <input
            type="radio"
            id="other"
            value="other"
            checked={gender === "other"}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          ></input>
        </div> */}
            

        <div>
            <label>Gender</label>
                <br></br>
            
            {
                genders.map((item,i)=>{
                    return (
                      <div key={i}>
                        <label htmlFor={item.value}>{item.label}</label>
                        <input 
                        type="radio" 
                        id={item.value} 
                        value={item.value} 
                        checked={gender === item.value}
                        onChange={(e)=>{
                          setGender(e.target.value);
                        }}
                        ></input>
                      </div>
                    )
                })
            }
        </div>

        <button type="submit">Proceed</button>
        </form>
    </div>
  )
}

export default Form3


/*
For all :        Value       e.target.value
For checkbox:   checked      e.target.checked
for radio       checked      e.target.value
 */