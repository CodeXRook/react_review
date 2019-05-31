import React, { Component } from 'react';
import fire from './config/Fire';
 
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{}
    }
  }

//COMPONENT DID MOUNT
componentDidMount(){
  this.authListener();
}

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if(user){
        this.setState({user});
        // localStorage.setItem('user', user.uid);
      }else{
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }


  render() {
    return(

      //Checking is user is logged in 
      //If this.state.user is true? Then great! we render home, push him to home. other wise log in, trya again
      <div className="App">
        
        {this.state.user ? (< Home /> : ) }

      </div>
    );
  }
}

export default App;
