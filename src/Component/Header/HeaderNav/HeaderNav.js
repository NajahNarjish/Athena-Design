import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/Group 86.png'
import './HeaderNav.css'
const HeaderNav = () => {
    return (
        <div className="container">
            <Navbar expand="lg">
                <Link to='/'><Navbar.Brand><img height='55px' src={logo} alt="" /></Navbar.Brand></Link>
                <Navbar.Toggle className='toggler' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='mr-2' active href="#home">Home</Nav.Link>
                        <Nav.Link className='mr-2' href="#about">About</Nav.Link>
                        <Nav.Link className='mr-2' href="#service">Service</Nav.Link>
                        <Nav.Link className='mr-2' href="#team">Our Team</Nav.Link>
                        <Nav.Link className='mr-2' href="#achievement">Achievement</Nav.Link>
                        <Nav.Link className='mr-2' href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className='mr-2' href="#contact"><button class="btn-curved">Contact Us</button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
};

export default HeaderNav;