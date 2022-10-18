import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';
import AppNavbar from "./AppNavbar";
import {Button, Container} from "reactstrap";
import {Link} from "react-router-dom";

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'admin',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/clients`)
            }).catch(() => {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        })

    }

    render() {
        return (
            <div>
                <AppNavbar/>

                <Container fluid>
                    <div class="row">
                        <div class="col">
                            <h1>Login</h1>
                        </div>
                    </div>
                        <div class="row">
                            <div class="col">
                                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                            </div>
                        </div>
                        <div className="row form">
                            <div className="col">
                                <label for={"username"}>Username</label>
                                <input type="text" name="username" id={"username"} value={this.state.username} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="row form">
                            <div className="col">
                                <label htmlFor={"password"}>Password</label>
                                <input type="password" name="password" id={"password"} value={this.state.password} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="row form">
                            <div className="col">
                                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                            </div>
                        </div>
                </Container>
            </div>
        )
    }
}

export default LoginComponent