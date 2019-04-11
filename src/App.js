import React, { Component } from 'react'; // STEP1: IMPORT THE RIGHT REACT COMPONENT. STATELESS OR STATFUL
import Products from './components/products.js'; //FIND THE RIGHT COMPONENT YOU'LL NEED TO IMPORT SET PROPS TO RENDER THAT COMPONENT ONCE CALLED 

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

    const { products } = this.state;

    return (
     <>
     
     <div className = 'container row mx-auto'>
     {
       
     }
     </>
    );
  }
}

export default App;
