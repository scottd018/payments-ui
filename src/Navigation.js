import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import './Main.css';

function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="sm" bg="dark" data-bs-theme="dark">
                <Container className='navigation'>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Row>
                                <Col md="auto"><Nav.Link href="/">Home</Nav.Link></Col>
                                <Col md="auto"><Nav.Link href="/payments">Payments</Nav.Link></Col>
                                <Col md="auto"><Nav.Link href="/categories">Categories</Nav.Link></Col>
                                <Col md="auto"><Nav.Link href="/account_types">Account Types</Nav.Link></Col>
                                <Col md="auto"><Nav.Link href="/source_accounts">Source Accounts</Nav.Link></Col>
                                <Col md="auto"><Nav.Link href="/destination_accounts">Destination Accounts</Nav.Link></Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;