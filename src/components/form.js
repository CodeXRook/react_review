import React from 'react';

const Form = (props) => {
        return (
            <>
                <form className="form">

                    <label> Product Name </label>
                     <input type="text" onChange={this.handleInputChange} value={this.state.value.input}/>
         

                     <label> Show Image</label>
                    <input type="text" onChange={this.handleInputChange} value={this.state.value.input} /> 

                    <label > Price </label>
                    <input type="text" placeholder=" " value={this.state.value.input} required />

                 <button onClick={this.handleSubmit}> Submit form </button>
                </form>
            </>
            )   
 }
        
export default Form;