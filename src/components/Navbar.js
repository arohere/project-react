import React, {Component, useState} from "react";
import HeaderModal from "./Modal";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, ModalHeader } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import logo from '../images/logo.jpg';
import first from './first.JPG'
import Carousel2 from './Carousel2.JPG'
import Carousel3 from './Carousel3.JPG'
import { Carousel } from "react-bootstrap";
import '../styles.css';

class Header extends Component {
    constructor(props){
        super(props);


        this.state = {
            isNavOpen: false
        };

        this.state = {
            colour: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return (
        <>
            <Navbar bg="light" variant="light" expand="md">
            <div className="container">
                <NavbarToggle onClick={this.toggleNav} />
                <Navbar.Brand href="#home" className="mr-auto">
                    <img src={logo}
                        width="250"
                        height="90"
                        className="d-inline-block align-top"
                        alt="React"
                    />
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav navbar className="offset-2">
                        <Nav.Item>
                            <Nav.Link id="navlink1" href="#home"><strong>ACADEMICS</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id="navlink2" href="#home"><strong>APPLY AND AFFORD</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id="navlink3" href="#home"><strong>CAMPUS</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link id="navlink4" href="#home"><strong>CURRENT STUDENTS</strong></Nav.Link>
                        </Nav.Item>                  
                    </Nav>
                    </Navbar.Collapse>
                <HeaderModal />
            </div>
            </Navbar>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12">
                        <section id= 'about'>
                            <h4 id="covid" className="offset-4">Campus COVID-19 Information</h4>
                        </section>
                    </div>
                </div>
                <div className="row row-header">
                    <div className="col-12">
                        <Carousel fade id="carousel">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={first}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Carousel2}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={Carousel3}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
        );
    }
  
  }
  export default Header;