import React, { Component } from 'react';

import './App.css';


class App extends Component {

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        this.setState({user});
        localStorage.setItem('user', user.uid);
      }else{
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

      this. state = {
     
       }
     }


  render() {

    const { products } = this.state;

    return (
     <>
     <UserProfile />

     </>
    );
  }
}

export default App;
