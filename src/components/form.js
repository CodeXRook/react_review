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
        const input = e.target.value
        this.setState({ input });

    }



    render() {
        return (
            <>
                <form className="form">

                    <label > Product Name </label>
                    <input type="text" onChange={this.handleInputChange} placeholder=" " name="{this.state.value.input} " required />

                     <label > Show Image</label>
                    <input type="text" placeholder=" " value="" required  /> 

                    <label > Price </label>
                    <input type="text" placeholder=" " value="" required />

                 <button onClick={this.handleSubmit}> Submit form</button>
                </form>
            </>
        )
    }
}
export default Form;