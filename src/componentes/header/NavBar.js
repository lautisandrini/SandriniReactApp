import CardWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return(
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#"><img alt= "" className="logoHeader" src="/assets/img/OmegaPower.png"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="linkNav" href="#link">Sobre Nosotros</Nav.Link>
                            <Nav.Link className="linkNav" href="#link">Contactanos</Nav.Link>
                            <Nav.Link className="linkNav" href="#link">Promociones</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CardWidget/>
            </Navbar>
        </div>
    )
}

export default NavBar