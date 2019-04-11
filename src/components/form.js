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

            )
        }
}
export default Form: