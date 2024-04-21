import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GenresModal from './Genres/GenresModal';

const NavBar = () => {

    const [showGenres, setShowGenres] = useState(false);

    return (
        <>
            <Navbar bg="primary" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Peliculas</Nav.Link>
                            <Nav.Link as={Link} to="/actors">Actores</Nav.Link>
                            <Nav.Link as={Link} to="/directors">Directores</Nav.Link>
                            <Nav.Link onClick={() => setShowGenres(true)}>Generos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresModal 
                show={showGenres} 
                handleClose={() => setShowGenres(false)} 
            />
        </>
    );
};

export default NavBar;