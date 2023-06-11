import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function NavbarComponent({length}) {
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="btn btn-dark">
              Home
            </NavLink>
              <NavLink to="/favorites" className="btn btn-dark">
                Favorites <span>{length}</span>
              </NavLink>
            <NavLink className="btn btn-dark">Pricing</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
