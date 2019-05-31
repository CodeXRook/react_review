import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  // //COMPONENT DID MOUNT
  // componentDidMount(){
  //   this.authListener();
  // }

  //   authListener() {
  //     firebase.auth().onAuthStateChanged((user) => {
  //       // console.log(user);
  //       if(user){
  //         this.setState({user});
  //         // localStorage.setItem('user', user.uid);
  //       }else{
  //         this.setState({ user: null });
  //         // localStorage.removeItem('user');
  //       }
  //     });
  //   }


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

            <div className="Email">
            <label htmlfor="email "> Email </label>
            <input 
              type="text"
              className="" 
              placeholder="Email"
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


 
           

          </form>
        </div>
      </div>
    );
  }
}

export default App;