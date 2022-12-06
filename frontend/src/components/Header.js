import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from "../actions/userActions";
 
const Header = () => {

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () =>{
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand href="/">RapiTienda</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i>Carrito
              </Nav.Link>
            </LinkContainer>
            {!userInfo ? 
            (<LinkContainer to='/login'>
              <Nav.Link>
                <i className="fas fa-user"></i>Ingresar
              </Nav.Link>
            </LinkContainer>
            ) : (
              <NavDropdown title={userInfo.name} id='username'> 
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Perfil</NavDropdown.Item>
                </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Salir</NavDropdown.Item>
              </NavDropdown>
            )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
