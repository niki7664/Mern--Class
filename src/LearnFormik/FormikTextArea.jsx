import { Field } from 'formik'
import React from 'react'

const FormikTextArea = ({name,label,type,onChange,required,...props}) => {
  
  return (
    <div>
         <Field name={name}>
                            {
                                ({field,form,meta})=>{

                                    return(<div>
                                        <label htmlFor={name}>{label}{required?<span style={{color:"red"}}>*</span>:null}</label>
                                        
                                        <textarea
                                        {...field} 
                                        {...props}
                                        type={type}
                                        id={name}
                                        value={meta.value}
                                        onChange={onChange?onChange:field.onChange}
                                        ></textarea>
                            

                                        {
                                            meta.touched&&meta.error?(<div style={{color:"red",fontSize:"12px"}}>{meta.error}</div>):null
                                        }
                                        
                                    </div>)
                                }
                            }
                        </Field>
    </div>
  )
}

export default FormikTextArea