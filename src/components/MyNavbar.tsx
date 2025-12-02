import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Link className="navbar-brand" to="./">
          Space Flight News
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="./">
              Home
            </Link>
            <Link className="nav-link" to="./details">
              Blogs
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
