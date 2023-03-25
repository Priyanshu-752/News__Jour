import Link from "next/link";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Log from "../assets/images/news-journey-high-resolution-logo-white-on-transparent-background.png"
import Image from "next/image";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav >
                    <Nav.Link as={Link} href="/"> 
                        <Image
                    src={Log}
                    width={130}
                    height={30}
                    alt="News article Logo"
                    
                />
                        </Nav.Link>
                    
                        <Nav.Link as={Link} href="/search">Search</Nav.Link>
                        <NavDropdown title="Categories" id="categories-dropdown">
                            <NavDropdown.Item as={Link} href="/categories/business">Business</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/categories/entertainment">Entertainment</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/categories/general">General</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/categories/health">Health</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/categories/science">Science</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/categories/sports">Sports</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/categories/technology">Technology</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;