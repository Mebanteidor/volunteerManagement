import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import { MdPerson, MdPersonAdd} from 'react-icons/md';

// .navbar {
//     background - color: #222;
// }
const Styles = styled.div`
    .navbar-brand{
        color:white;
        font-size:1.5em;
    }

    .navbar-nav .nav-link {
        color: #dcdcdc;
        &:hover {
            color: white;
        }
    }
`;

export const NavBar = () => (
    <Styles>
        <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/">HelpingHands</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-secondary">Search</Button>
            </Form> */}
            <Nav>
                        <Nav.Link href="/login">Log in       <MdPerson/></Nav.Link>
                        <Nav.Link href="/Register">Register         <MdPersonAdd/></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)