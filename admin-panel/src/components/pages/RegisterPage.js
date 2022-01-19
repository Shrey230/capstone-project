import React from 'react'
import { Link } from 'react-router-dom'
import { Component } from 'react'


import '../../App.css'

export default class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
         
    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
            input
        });
    }
         
    handleSubmit(event) {
        event.preventDefault();
      
        if (this.validate()) {
            console.log(this.state);
      
            let input = {};
            input["username"] = "";
            input["lastname"] = "";
            
            input["email"] = "";
            input["password"] = "";
            input["confirm_password"] = "";
            this.setState({ input: input });
      
            alert("You are register to the admin panel");
        }
    }
      
    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
       
        if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter your username.";
        }
      
        if (typeof input["username"] !== "undefined") {
            const re = /^\S*$/;
            if (input["username"].length < 4 || !re.test(input["username"])) {
                isValid = false;
                errors["username"] = "Please enter valid username.";
            }
        }
        if (!input["lastname"]) {
            isValid = false;
            errors["lastname"] = "Please enter your lastname.";
        }
      
        if (typeof input["lastname"] !== "lastname") {
            const re = /^\S*$/;
            if (input["lastname"].length < 4 || !re.test(input["lastname"])) {
                isValid = false;
                errors["lastname"] = "Please enter valid lastname.";
            }
        }
      
        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }
      
        if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }
      
        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }
      
        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please enter your confirm password.";
        }
      
        if (typeof input["password"] !== "undefined") {
            if (input["password"].length < 6) {
                isValid = false;
                errors["password"] = "Please add at least 6 charachter.";
            }
        }
      
        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
              
            if (input["password"] !== input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
            }
        }
      
        this.setState({
            errors: errors
        });
      
        return isValid;
    }
         
    render() {
        return (
            <div className= "text-center m-5-auto">
                <h1>Register for Admin Panel</h1>
                <form onSubmit={this.handleSubmit}>
      
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.input.username}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder="Enter username"
                            id="username" />
      
                        <div className="text-danger">{this.state.errors.username}</div>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Lastname:</label>
                        <input
                            type="text"
                            name="lastname"
                            value={this.state.input.lastname}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder="Enter lastname"
                            id="lastname" />
      
                        <div className="text-danger">{this.state.errors.username}</div>
                    </div>
      
                    <div class="form-group">
                        <label for="email">Email Address:</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.input.email}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder="Enter email"
                            id="email" />
      
                        <div className="text-danger">{this.state.errors.email}</div>
                    </div>
      
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.input.password}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder="Enter password"
                            id="password" />
      
                        <div className="text-danger">{this.state.errors.password}</div>
                    </div>
      
                    <div class="form-group">
                        <label for="password">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirm_password"
                            value={this.state.input.confirm_password}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder="Enter confirm password"
                            id="confirm_password" />
      
                        <div className="text-danger">{this.state.errors.confirm_password}</div>
                    </div>
                    <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                 
                    <input type="submit" value="Submit" class="btn btn-success" />
                </form>
                <footer>
                    <p><Link to="/">Back to Homepage</Link>.</p>
                </footer>
            </div>
        );
    }
}
