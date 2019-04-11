import Form from './components/form';

class Form extends React.Component{
        constructor(props){
            super(props);

            this.state ={
                name: '',
                price: '',
                image: []    
            }
        }

        render(){
            return(
                <form className="needs-validation" novalidate>
                     <div className="col-md-4 mb-3"></div>
                     <label for="validationCustom01"> Enter Product </label>
            )
        }
}
export default Form: