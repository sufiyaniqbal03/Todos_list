import React from 'react';
import { Button, Stack,Navbar,Container,Nav,NavDropdown } from "react-bootstrap";


export default function MyHeader(props) {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>       
        <Navbar.Brand href="#home" className='container-fluid text-center'>{ props.title1 }</Navbar.Brand>       
      </Container>
    </Navbar>
  )
}

/*
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Brand href="#home">{ props.title1 }</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">           
            <Nav.Link href="#link">Link</Nav.Link> 
            <NavDropdown title="Dropdown" >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
*/