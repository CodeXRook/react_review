import React, { Component } from 'react';
import Products from './components/products.js';



class App extends Component {
     constructor(props){
      super(props);

      this.state = {
        products:[
        {name:'Lv Belt', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M6065S_PM2_Front%20view.jpg?wid=382&hei=100', price: '$1000'}

        ]
       }
     }


  render() {
    return (
     <>
     <h1>what up son </h1>
     </>
    );
  }
}

export default App;
