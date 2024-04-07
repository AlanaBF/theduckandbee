import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../../assets/images/duck and bee banner.jpg";
import "../../App.css";
import { NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar navigation navbar-expand-md  justify-content-md-center justify-content-start"
    >
      <LinkContainer to="/">
        <Navbar.Brand className="navbarBrand">
          <img src={Logo} alt="logo" height="50px" />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <i className="fa-solid fa-bars"></i>
      </Navbar.Toggle>

      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="navbar-collapse collapse justify-content-between align-items-center w-100"
      >
        <Nav className="me-auto navbar-nav mx-auto text-md-center text-left">
          <LinkContainer to="/">
            <Nav.Link className="navLink">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Blog">
            <Nav.Link className="navLink">Blog</Nav.Link>
          </LinkContainer>

          <NavDropdown
            title="Life Chapters"
            id="basic-nav-dropdown"
            className="navDropdown"
          >
            <LinkContainer to="/PathwayToWellness">
              <Nav.Link> My Transformation</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Cashel">
              <Nav.Link>Cashel&apos;s Transformation</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/LarksRise">
              <Nav.Link>Our House Renovation</Nav.Link>
            </LinkContainer>
          </NavDropdown>
        </Nav>

        <Nav className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap">
          <div className="navIcons">
            <a href="https://github.com/AlanaBF" target="_blank"
                rel="noopener noreferrer">
              <i className="fa navbarIcons fa-github"></i>
            </a>{" "}
            <a href="https://www.linkedin.com/in/alanabarrettfrew/" target="_blank"
                rel="noopener noreferrer">
              <i className="fa navbarIcons fa-linkedin"></i>
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
