import { Form, Formik } from 'formik';
import React from 'react'
import * as yup from "yup"
import FormikInput from './FormikInput';
import FormikRadio from './FormikRadio';
import FormikSelect from './FormikSelect';
import FormikCheckBox from './FormikCheckBox';
import FormikTextArea from './FormikTextArea';
const FormikTutorial = () => {
    let initialValues = {
        fullName:"",
        email:"",
        password:"",
        gender:"male",
        country:"NEP",
        isMarried:false,
        description:"",
        phoneNumber:"",
        age:0,
    };
      let onSubmit = (value, other) => {
        console.log(value);
      };
      let validationSchema = yup.object({
        fullName:yup.string()
        .required("Full Name is required")
        .matches(/^[a-zA-Z\s]+$/, "Only Alphabet and space are allowed.")
        .min(10,"Must be at least 10 characters")
        .max(15,"Must be at most 15 characters"),
        email:yup.string()
        .required("Email is required")
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email format is not valid"),
        password:yup.string()
        .required("Password is required")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+,-./:;<=>?@[\\]^_`{|}~])[a-zA-Z0-9!@#$%^&*()_+,-./:;<=>?@[\\]^_`{|}~]{8,50}$/, "Password should be minimum 8 characters, maximum 50 characters, should have at least one uppercase, one lowercase, one special symbol and one number."),
        gender:yup.string().required("Gender is required"),
        country:yup.string().required("Country is required"),
        isMarried:yup.boolean(),
        description: yup.string(),
        phoneNumber:yup.string()
        .required("Phone Number is required")
        .matches(/^[0-9]+$/,"Only numbers are allowed.")
        .min(10, "Must be exactly 10 characters")
        .max(10,"Must be exactly 10 characters"),
        age:yup.number().required("Age is required").min(18,"Age must be more than or equal to 18")
    });
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
  return (
    <div>
         <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
            //for formik we need
            //name
            //label
            //type
            //onChange
            //required
            //option (radio, select)
          return (
            <Form>
              <FormikInput
              name ="fullName"
              label="Full Name:"
              type="text"
              onChange={(e)=>{
                formik.setFieldValue("fullName", e.target.value)
              }}
              required={true}
              ></FormikInput>
              <br />
              <FormikInput
              name="email"
              label="Email:"
              type="email"
              onChange={(e)=>{
                formik.setFieldValue("email", e.target.value)
              }}
              required={true}
              ></FormikInput>
              <br />
              <FormikInput
              name = "password"
              label="Password:"
              type="password"
              onChange={(e)=>{
                formik.setFieldValue("password", e.target.value)
              }}
              required={true}
              ></FormikInput>
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
              <FormikCheckBox
              name="isMarried"
              label="Is Married"
              onChange={(e)=>{
                formik.setFieldValue("isMarried", e.target.checked)
              }}
              ></FormikCheckBox>
              <br />
              <FormikTextArea
              name="description"
              label="Description:"
              type="text"
              onChange={(e) => {
                formik.setFieldValue("description", e.target.value);
              }}
              placeholder="Enter your description"
              ></FormikTextArea>
              <br />
              <FormikInput
              name="phoneNumber"
              label="Phone Number"
              type="text"
              onChange={(e) => {
                formik.setFieldValue("phoneNumber", e.target.value);
              }}
              required={true}
              ></FormikInput>
              <br />
              <FormikInput
              name="age"
              label="Age"
              type="number"
              onChange={(e) => {
                formik.setFieldValue("age", e.target.value);
              }}
              required={true}
              ></FormikInput>
              <br />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
    </div>
  )
}
export default FormikTutorial