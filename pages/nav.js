import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav, NavbarBrand, Container, NavLink} from 'react-bootstrap';

export default function nav() {
  return (
    <>
    <Navbar className='bg_trans' variant="dark" sticky="top" >
        <Container className='px-5'>
            <NavbarBrand className="brand" href="/">DB Movies</NavbarBrand>
                <Nav className="me-auto">
                    <NavLink className="change" href="/">Home</NavLink>
                    <NavLink className="change" href="/movie">Movies</NavLink>
                </Nav>
        </Container>
    </Navbar>
    </>
  )
}