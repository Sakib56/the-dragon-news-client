import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <Container>
            <div className='text-center my-5'>
                <img src={logo} alt="" />
                <p className='fs-3 my-2 text-secondary'>Journalism Without Fear or Favour</p>
                <p className='fs-3'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex my-5 gap-2 fs-4 fw-semibold'>
                <Button variant="danger">Danger</Button>
                <Marquee speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container fluid>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mx-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">About</Nav.Link>
                                <Nav.Link href="#action2">Career</Nav.Link>
                            </Nav>
                            <>
                                <p>Profile</p>
                                <Button variant="dark">Login</Button>
                            </>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;