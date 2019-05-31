import React, { Component } from 'react';

import './App.css';
import { createServer } from 'https';

const formValid = formErrors =>{
  let valid = true;

  Object.values(formErrors).forEach( val => { 
    val.length > 0 && (valid = false);
  });
  return valid;
};

class App  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
           formErrors: {
           firstName: "",
           lastName: "",
           email: "",
           password: ""
      }
   };
  }

handleSubmit = e => {
  e.preventDefault();
  if (formValid(this.state.formErrors)) {
    console.log(`
    --SUBMITTING --
    First Name: ${this.state.firstName}
    Last Name: ${this.state.lastName}
    Email: ${this.state.email}
    Password: ${this.state.password}
    `)
  } else{
    console.error('FORM INVALID - DISPLAY ERROE MESSAGE');
  }
};

handleChange = e => {
  e.preventDefault();
  const { name, value } = e.target;
  let formErrors = this.state.formErrors;

  //SWITCH IS A GIANT IF ELSE BUT EASIER
  switch (name) {
    case 'firstName':
    //Turnerary operator 
      formErrors.firstName = 
      value.length < 3 && value.length  > 0 
      ? "minimum 3 characters required"
       : " ";
     break;

    case 'lastName':
      //Turnerary operator 
        formErrors.lastName = 
        value.length < 3 && value.length  > 0 
        ? "minimum 3 characters required"
         : " ";
       break;
 
      case 'email':
    //Turnerary operator 
      formErrors.email = 
      value.length < 3 && value.length  > 0 
      ? "minimum 3 characters required"
       : " ";
     break;

     case 'password':
      //Turnerary operator 
        formErrors.password= 
        value.length < 3 && value.length  > 0 
        ? "minimum 3 characters required"
         : " ";
       break;
       default:
       break;
    
  }
};

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} novalidation>
            <div className="firstName">
              <label htmlfor="firstName ">First Name</label>
              <input 
              type="text"
              className="" 
              placeholder="First Name" 
              type="text" 
              name="firstName"
              noValidate
              onChange={this.handleChange} />
            </div>

            <div className="lastName">
            <label htmlfor="lastName ">Last Name</label>
            <input 
              type="text"
              className="" 
              placeholder="Last Name" 
              type="text" 
              name="lastName"
              noValidate
              onChange={this.handleChange} />
            </div>

            <div className="email">
            <label htmlfor="email "> Email </label>
            <input 
              type="text"
              className="" 
              placeholder="email"
              type="email" 
              name="email"
              noValidate
              onChange={this.handleChange} />
            </div>

            <div className="password">
            <label htmlfor="password">Password</label>
             <input 
              type="text"
              className="" 
              placeholder="Password" 
              type="password" 
              name="password"
              noValidate
              onChange={this.handleChange} />
            </div>
            <div className="createAccount">
              <button type="submit"> Create Account </button>
              <small>Already Have an Account? </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default App;