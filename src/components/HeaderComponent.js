import { React, Component } from 'react';
import {Input, Col, Form, FormInput, Label, Button, Modal, ModalHeader, ModalBody, Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, FormGroup } from 'reactstrap';
import '../shared/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../shared/logo.png';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
        isNavOpen: false
        }
        this.toggleNav=this.toggleNav.bind(this);
    };

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
        }

    render(){
        return (
            <div>
            <Navbar dark expand="md">
                <NavbarBrand href='/' className="me-auto"><img src={logo} heigh="30" width="41"></img></NavbarBrand>
                <NavbarToggler onClick={this.toggleNav}/>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <div className='offset-sm-1'>
                    <Nav navbar>    
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className='fa fa-home fa-lg'></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className='fa fa-address-book fa-lg'></span>  xas
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </div>
                    </Collapse>
                    </Navbar>
                    </div>
        );
    }
    }
export default Header;