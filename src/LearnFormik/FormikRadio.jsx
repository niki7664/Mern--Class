import { Field } from "formik";
import React from "react";
const FormikRadio = ({
  name,
  label,
  type,
  required,
  options,
  onChange,
  ...props
}) => {
  //props={placeholder:"firstName", style={{backgroundColor:"red"}}}
  //props works as the rest operator
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div>
              <label htmlFor={name}>
                {label}
                {required ? <span style={{ color: "red" }}>*</span> : null}
              </label>
              <br />
              {options.map((item, i) => {
                return (
                  <div key={i}>
                    <label htmlFor={item.value}>{item.label}</label>
                    <input
                      {...field}
                      {...props}
                      id={item.value}
                      type="radio"
                      value={item.value}
                      onChange={onChange ? onChange : field.onChange}
                      checked={meta.value === item.value}
                    ></input>
                    {meta.touched && meta.error ? (
                      <div style={{ color: "red" }}>{meta.error}</div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        }}
      </Field>
    </div>
  );
};
export default FormikRadio;