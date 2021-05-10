import React, { Component } from "react";
import Api from "../utils/api";

export default class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    handleInputChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value}) 
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        Api.signIn(userData).then(res => {
            console.log(res)
            window.location.href="/home"
        })
    }
    render() {
        return (
            <form  >

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username" name="username" value={this.state.email} onChange = {this.handleInputChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"  value={this.state.password} onChange = {this.handleInputChange}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.handleSubmit}>Sign in</button>
            </form>
        );
    }
}