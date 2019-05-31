import React, { Component } from 'react';
 
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{}
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
    return(
<div className="wrapper"> 
  <div className="form-wrapper">
      <h1>Create Account</h1>
  </div>
    </div>
    );
  }
}

export default App;