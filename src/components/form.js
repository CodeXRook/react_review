import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            name: 'Lv Belt',
            price: '$1000.00',
            image: ['https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M6065S_PM2_Front%20view.jpg?wid=382&hei=100']
        }
    }
   
  handleInputChange = (e) => {
    const input = parseInt(e.target.value);
    this.setState({ input });
  }



    handleSubmit = (e) =>{
const { input, name, price, image} = this.state;

    }


    render() {
        const { name} = this.state;
        const {image} = this.state;
        const { price} = this.state;
        return (
            <>
                <form className="form">

                    <label > Product Name </label>
                    <input type="text" onChange={this.handleInputChange} placeholder=" " value={this.state.value.name} required />

                     <label> Show Image</label>
                    <input type="text" onChange={this.handleInputChange} placeholder=" " value={this.state.value.image} required  /> 


                    <label > Price </label>
                    <input type="text" placeholder=" " value="" required />

                 <button onClick={this.handleSubmit}> Submit form</button>
                </form>
            </>
        )
    }
}
export default Form;