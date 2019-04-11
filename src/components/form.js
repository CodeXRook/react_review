import Form from './components/form';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: '',
            image: []
        }
    }

    render() {
        return (
            <form className="needs-validation" novalidate>
                <div className="col-md-4 mb-3"></div>
                <label for="validationCustom01"> Enter Product </label>
                <input type="text" className="form-control" id="validationCustom01" placeholder=" " value="" required />
                </div>

                <div className="col-md-4 mb-3">
                <label for="validationCustom02"> Show Image</label>
                <input type="text" className="form-control" id="validationCustom02" placeholder=""  required />
                </div>

                   <div className="col-md-4 mb-3">
                   <label for="validationCustom03"> Price </label>
                   <input type="text" class="form-control" id="validationCustom03" placeholder=" " required />
                   </div>

                )
            }
    }
export default Form: