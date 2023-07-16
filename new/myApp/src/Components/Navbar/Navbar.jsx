import {Navbar, Nav} from "react-bootstrap"

function NavbarComponents() {
  return (
    <Navbar bg="dark" expand="lg" >
      <Navbar.Toggle aria-controls="navbarNav ms-auto" style={{background: "white"}}/>
      <Navbar.Collapse id="navbarNav">
        <Nav className="mx-auto">
          <Nav.Link className="text-light" href="/home">Home</Nav.Link>
          <Nav.Link className="text-light" href="/comments">Comments</Nav.Link>
          <Nav.Link className="text-light" href="/post">Post</Nav.Link>
          <Nav.Link className="text-light" href="/todos">Todos</Nav.Link>
          <Nav.Link className="text-light" href="/users">Users</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponents;
