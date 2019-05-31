import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      
    }
  }

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