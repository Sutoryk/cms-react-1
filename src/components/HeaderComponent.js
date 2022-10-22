import { React, Component } from 'react';
import {Input, Col, Form, FormInput, Label, Button, Modal, ModalHeader, ModalBody, Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, FormGroup, NavbarText } from 'reactstrap';
import '../shared/Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../shared/logo.png';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
        isNavOpen: false,
        isModalOpen: false

        }

        this.toggleNav=this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    };

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
        }

        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
    
        }
        handleLogin(event){
            this.toggleModal();
            //możemy to zrobić dzięki metodzie Ref w Inpucie
            alert("submitted"+this.username.value+this.password.value);
            event.preventDefault();
            try {
                // send request to backend and wait for the response
                const response = fetch("http://127.0.0.1:5000/guess", {
                    method: "POST",
                    // Data will be serialized and sent as json
                    data: JSON.stringify({
                        guess: this.username.value,
                        correctAnswer: this.password.value,
                        // and whatever else you want to send
                    }),
                    // tell the server we're sending JSON
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                if(!response.ok){
                    // server returned a status code other than 200-299 --> something went wrong
                }
            } catch (error) {
                // an error occured
            }
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
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-address-card fa-lg"></span> Informacje
                            </NavLink>
                        </NavItem>
                        </Nav>
                        
                    </div>
                    <NavbarBrand className='offset-md-3'>
                            <Input type="text" id="text" name="text"
                            innerRef={(input)=>this.password=input}/>
                </NavbarBrand>
                    <Nav className="offset-md-2" navbar>
                <NavItem>
                    <Button outline onClick={this.toggleModal}>
                        <span className='fa fa-sign-in fa-lg'>Login</span>
                    </Button>
                </NavItem>
              </Nav>
              
                    
                    </Collapse>
                    </Navbar>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                            innerRef={(input)=>this.username=input}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Username</Label>
                            <Input type="password" id="password" name="password"
                            innerRef={(input)=>this.password=input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                innerRef={(input)=>this.remember = input}/>
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>

            </Modal>

            {/* ukryte na telefonach */}
            <Navbar xl='12' className='secondary-navbar d-none d-xl-block' expand="md">
                <Nav navbar>
                <div className='offset-sm-1'>
                    <NavItem> </NavItem>
                    </div>
                </Nav>
            </Navbar>
                    </div>
                    
        );
    }
    }
export default Header;