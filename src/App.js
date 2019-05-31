import React, { Component } from 'react';

import './App.css';


class App extends Component {

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    })
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
