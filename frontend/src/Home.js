import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Button, Container } from 'reactstrap';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link"><Link onClick={() => {window.location.href="/clients"}}>Clients</Link></Button>
                </Container>
            </div>
        );
    }
}
export default Home;