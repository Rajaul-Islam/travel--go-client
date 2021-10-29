import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Header = () => {
    const {allContext}=useAuth();
    const {user,logOut}=allContext;
    return (
 
         <div>
            <Navbar  bg="" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to='/home'>
                        <img
                            alt=""
                            src=''
                            width="150"
                            height=""
                            className="d-inline-block align-top"
                        />{''}
                        Travel Go
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to='/home'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/donation'>Donation</Nav.Link>
                            <Nav.Link as={NavLink} to='/addElement'>Add Element</Nav.Link>
                            


                            <>
                            {
                                user.displayName?<Nav.Link className='' onClick={logOut}> hello! {user.displayName} {" "}Logout</Nav.Link> :<><Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
                                <Nav.Link as={NavLink} to='/login'>Login</Nav.Link> </>
                            }
                            </>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
      
    );
};

export default Header;