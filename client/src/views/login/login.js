  
import React, { Component} from "react";
import "./App.css";
import Button from '../../components/CustomButtons/Button';

import axios from "axios";
//import auth from '../Auth';
import Cookies from 'js-cookie'
import auth from '../../Auth'
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      password: null,
      formErrors: {
        firstName: "",
        password: ""
      },
      apiResponse:""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if(formValid(this.state))
    {
    const username=this.state.firstName;
    const password=this.state.password;
    const url = "http://localhost:9000/admin/login";
    let sendData = () => {
    axios.post(url, {username,password})
       .then(res => {
         console.log('Data send')
         Cookies.set('name',username);
         console.log(Cookies.get('name'));
         auth.login(()=>{
           console.log('name')
          this.props.history.push('/admin/dashboard'); 
         })
        })
       .catch(err=>{
         if(err.response)
         {
          alert("Invalid username or password");
          this.props.history.push('/')
         }
       })
    }
    sendData();
  }
    else
    {
      alert("Fill the form properly");
    }
    this.props.history.push('/admin/dashboard')
  };

  /*handle = e =>{
    e.preventDefault();
    this.props.history.push('/');
  }

  handleback = e =>{
    e.preventDefault();
    this.props.history.push('/');
  }
  */
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "Invalid Username" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 4 ? "Invalid password" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
            <p>{this.state.apiResponse}</p>
            <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Username</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder=""
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder=""
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
              <br />
            </div>
            <div className="createAccount">
              <Button color="primary" onClick={this.handleSubmit} type="submit">Log In</Button>
              <br></br>
            </div>
          </form>
         </div>
      </div>
    );
  }
}
