import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
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
              type="text" 
              name="email"
              noValidate
              onChange={this.handleChange} />
            </div>

            <div className="password">
            <label htmlfor="password">Password</label>
             <input 
              type="text"
              className="" 
              placeholder="password" 
              type="text" 
              name="password"
              noValidate
              onChange={this.handleChange} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;