import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from "yup"
import FormikInput from './FormikInput'
import FormikTextArea from './FormikTextArea'
import FormikSelect from "./FormikSelect";
import FormikRadio from "./FormikRadio";
import FormikCheckBox from "./FormikCheckBox";

const FormikForm = () => {

   //Each field has three things:
  //value
  //error
  //touch
  let initialValues = {
    firstName: "",
    lastName: "",
    description: "",
    country: "",
    gender: "",
    isMarried: false,
  };
  let validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    description: yup.string().required("Description Field is required"),
  });
  //validation will run only if,
  //onCHange event is fired.
  //onblur (touched) event is fire
  //onSubmit event id fired.
  let onSubmit = (value, other) => {
    console.log(value);
  };
let countryOptions=[
  {
    label: "Select Country",
    value: "",
    disabled: true,
  },
  {
    label: "Nepal",
    value: "NEP",
  },
  {
    label: "India",
    value: "IND",
  },
  {
    label: "China",
    value: "CHN",
  },
  {
    label: "Japan",
    value: "JPN",
  },
  {
    label: "United States of America",
    value: "USA",
  },
]
  let genderOptions = [
    {
      label:"Male",
      value:"male"
    },            
    {
      label:"Female",
      value:"female"
    },
    {
      label:"Other",
      value:"other"
    },
  ]

  return (
    <div>
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                (formik)=>{

                    return (
                    <Form>
                         <FormikInput 
                         name="firstName" 
                         label="First Name" 
                         type="text"
                         onChange={(e)=>{
                                formik.setFieldValue("firstName",e.target.value)
                             }}
                             placeholder="firstName"
                             required={true}
                             
                         ></FormikInput>


                         <FormikInput 
                         name="lastName" 
                         label="Last Name" 
                         type="text"
                         onChange={(e)=>{
                            formik.setFieldValue("firstName",e.target.value)
                         }}
                         placeholder="lastName"
                             required={true}
                        
                         ></FormikInput>

                        <FormikTextArea 
                         name="description" 
                         label="Description" 
                         type="text"
                         onChange={(e)=>{
                            formik.setFieldValue("firstName",e.target.value)
                         }}
                         placeholder="Any Message?"
                             required={true}
                        
                         ></FormikTextArea>

            <FormikSelect
                name="country"
                label="Country:"
                onChange={(e) => {
                  formik.setFieldValue("country", e.target.value);
                }}
                required={true}
                options={countryOptions}
              ></FormikSelect>
              <br />
              <FormikRadio
              name="gender"
              label="Gender:"
              onChange={(e)=>{
                formik.setFieldValue("gender", e.target.value)
              }}
              required={true}
              options={genderOptions}
              ></FormikRadio>
              <br />

              <FormikCheckBox
              name="isMarried"
              label="Is Married"
              onChange={(e)=>{
                formik.setFieldValue("isMarried", e.target.checked)
              }}></FormikCheckBox>








                        {/* <Field name="firstName">
                            {
                                ({field,form,meta})=>{
                                    return(<div>
                                        <label htmlFor="firstName">First Name : </label>
                                        <input
                                        {...field} 
                                        type="text" 
                                        placeholder="Enter Your First Name" 
                                        id="firstName"
                                        value={meta.value}
                                        onChange={field.onChange}
                                        // onChange={(e)=>{
                                        //    formik.setFieldValue("firstName",e.target.value)
                                        // }}
                                        ></input>
                                        {/* meta={
                                            value:"",
                                            error:"First name is required"
                                            touched: true
                                        } */}

                                        {/* {
                                            meta.touched&&meta.error?(<div style={{color:"red",fontSize:"12px"}}>{meta.error}</div>):null
                                        }
                                        
                                    </div>)
                                }
                            }
                        </Field>  */}

                       



                       

                        <button type="submit">Submit</button>
                        
                    </Form>)
                }
            }
        </Formik>
    </div>
  )
}

export default FormikForm


/*
Each field has three things: value,error and touch.

 */