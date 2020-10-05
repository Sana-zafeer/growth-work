import React, {Component} from 'react';
import {connect} from 'react-redux';
import addEmpReduce from "../reducers/reducer";
import {addEmp} from "../actions";
import {reduxForm, submit} from 'redux-form'

class RegistraionForm extends Component {
    constructor(props) {
        super(props);
       this.state={
           name:' ',
           email:' ',
           phone : ' '
        }
    }

    handleChange =(e) =>{
     this.setState({
         [e.target.name]: e.target.value,
     })
    }

    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.handleAdd(this.state.name,this.state.email,this.state.phone);
    }

    onSubmit=(e)=>{
        this.setState({
            [e.target.name]: ' ',
        })
    }

    render() {
       const {formData}=this.props;
        return (
            <div className="register-form-wrapper">
                <form className="register-form"  onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="register-form-content">
                        <h3 className="register-form-head">Add more employee</h3>
                        <span className="register-form-head-text"> Enter new member details</span>
                    </div>

                    <div className="reg-form-name-container sc">
                        <label className="reg-form-name-label"
                               htmlFor="reg-form-name-for">Name</label>
                        <input
                            id="reg-form-name-for"
                            type="text"
                            name="name"
                            value={this.state.name}
                            className="reg-form-name-input"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                    <div className="reg-form-email-container sc">
                        <label className="reg-form-email-label"
                               htmlFor="reg-form-email-for">
                            Email
                        </label>
                        <input
                            id="reg-form-email-for"
                            type="email"
                            value={this.state.email}
                            name="email"
                            className="reg-form-email-input"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                    <div className="reg-form-number-container sc">
                        <label className="reg-form-number-label"
                               htmlFor="reg-form-number-for">
                            Phone
                        </label>
                        <input
                            id="reg-form-number-for"
                            type="number"
                            className="reg-form-number-input"
                            value={this.state.phone}
                            name="phone"
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>

                    <button className="add-emp-btn"  onSubmit={this.onSubmit}>
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log("state-----***",state);
    return{
        formData:state.addEmpReduce.detail
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleAdd: (name, email, phone) => dispatch(addEmp(name,email,phone)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistraionForm);