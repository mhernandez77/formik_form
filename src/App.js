import React from "react";
import './index.css';
import {useFormik} from "formik";

// import React, {useState} from 'react';

// TODO: import useFormik from formik library
//my uderstanding of library
// <script src="https://unpkg.com/formik/dist/formik.umd.production.min.js"></script>

function App() {
  // TODO: add a const called formik assigned to useFormik()
  //created const component (in camelcase)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log('form:', values);
        }
    });

  return (
      <div>
          <form onSubmit={formik.handleSubmit}>
              <div>Email</div>
              {/*The email error message should be within a div element that has an id of emailError*/}
              {/*name property & attribute with an onChange event*/}
              <input id="emailField" name="email" type="email" onChange={formik.handleChange}
              value={formik.values.name}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null
              }

              <div>Password</div>
              {/*The password error message should be within a div element that has an id of pswError*/}
              <input id="pswField" name="password" type="password"/>
              <button id="submitBtn" type="Submit">Submit</button>
          {/*    The submit button should have an id of submitBtn*/}
          </form>
      </div>
  );
}

export default App;
