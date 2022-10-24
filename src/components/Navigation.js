import {Navbar, Nav, NavDropdown} from "react-bootstrap";

function Navigation() {
    return(
        <Navbar className="font-link">
                <Navbar.Brand href="#brand">
                    <img
                        src="https://banner2.cleanpng.com/20180402/bje/kisspng-computer-icons-avatar-login-user-avatar-5ac207e69ecd41.2588125315226654466505.jpg"
                        width="60"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-lg-auto">
                        <Nav.Link href="#aboutMe">About Me</Nav.Link>
                        <Nav.Link href="#aboutMe">Services</Nav.Link>
                        <Nav.Link href="#aboutMe">Contact</Nav.Link>
                        {/*<NavDropdown title="Contact" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
