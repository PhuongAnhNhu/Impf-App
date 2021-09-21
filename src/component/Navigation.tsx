import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import user from "../dummydata/user";

const Navigation = () => {
  const logoutHandler = () => {
    // dispatch(logout());
    console.log("logout");
  };

  return (
    <div>
      <Navbar className="p-2 p-md-3 p-lg-4" bg="light" variant="light">
        <Nav.Link href="/">
          <Navbar.Brand>Impf App</Navbar.Brand>
        </Nav.Link>
        <Nav.Link href="/appointment">Neuer Termin</Nav.Link>
        <Nav.Link href="/newpatient">Neuer Patient</Nav.Link>
        <Nav.Link href="/impfstoff">Impfstoff anlegen</Nav.Link>
        {user ? (
          <NavDropdown title={user.name} id="username">
            <Nav.Link href="/profile">
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </Nav.Link>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Nav.Link href="/login">
            <Nav.Link>
              <i className="fas fa-user"></i> Sign in
            </Nav.Link>
          </Nav.Link>
        )}

        {/* TODO: Nur für Admin */}
        {/* <Nav.Link href="/admin/newuser">Neuer Benutzer</Nav.Link> */}
      </Navbar>
    </div>
  );
};

export default Navigation;
