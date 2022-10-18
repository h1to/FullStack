import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import AuthenticationService from "../service/AuthenticationService";

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/" onClick={() => window.location.href="/"}>Home</NavbarBrand>
            <NavbarBrand className="navbar-nav navbar-collapse justify-content-end">
                {!isUserLoggedIn && <li><Link className="nav-link" to="/login" onClick={() => window.location.href="/login"}>Login</Link></li>}
                {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
            </NavbarBrand>
        </Navbar>;
    }
}