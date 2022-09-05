import CardWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {
    return(
        <div>
            <Navbar expand="lg">
                <Container>
                    <Nav.Link href="/"><img alt= "" className="logoHeader" src="/assets/img/OmegaPower.png"></img></Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="linkNav" href="productos/creatinas">Creatinas</Nav.Link>
                            <Nav.Link className="linkNav" href="productos/aminoacidos">Aminoacidos</Nav.Link>
                            <Nav.Link className="linkNav" href="productos/proteinas">Proteinas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CardWidget/>
            </Navbar>
        </div>
    )
}

export default NavBar