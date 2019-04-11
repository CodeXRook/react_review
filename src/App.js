import React, { Component } from 'react'; // STEP1: IMPORT THE RIGHT REACT COMPONENT. STATELESS OR STATFUL
import Products from './components/products.js'; //FIND THE RIGHT COMPONENT YOU'LL NEED TO IMPORT SET PROPS TO RENDER THAT COMPONENT ONCE CALLED 
import Form from './components/form';

class App extends Component {
     constructor(props){
      super(props);

      this.state = {
        products:[
        {name:'Lv Belt', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M6065S_PM2_Front%20view.jpg?wid=382&hei=100', price: '$1000.00'},
        {name:'Lv tie', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M71869_PM2_Front%20view.jpg?wid=382&hei=100', price: '$550.00'},
        {name:'Lv Belt', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--LP0109_PM2_Front%20view.jpg?wid=382&hei=100', price: '$185.00'},
        {name:'Lv ORAGE FOR MEN', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--LP0051_PM2_Front%20view.jpg?wid=382&hei=100', price: '$250.00'},
        {name:'Lv Robe', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--FGCO37AYZ571_PM2_Front%20view.jpg?wid=382&hei=100', price: '$460.00'},
        {name:'Lv Women shoes', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--AG5U7BMI61_PM2_Front%20view.jpg?wid=189&hei=100', price: '$1,090.00'}
        ]
       }
     }


  render() {

    const { products } = this.state;

    return (
     <>
     <Form/>


     <div className = 'container row mx-auto'>
     {
       products.map((e, i) => {
         //e IS ELEMENT SO IT WOULD EVERYTHING IN ARRAY ONCE INDEX IS e. This is a shorter way of wrtting {this.e}
         return <Products name={e.name} image={e.image} price={e.price} />;
       })
     }
     </div>
     </>
    );
  }
}

export default App;
