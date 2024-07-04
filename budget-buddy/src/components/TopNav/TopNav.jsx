import React, { useState } from 'react';
import './TopNavStyles.scss';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { menuData } from '../../utils/menuData';


function TopNav({ handleActive }) {
  const expand = false;
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }


  return (
    <Navbar key="offcanvas" bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#" className='brand-name'>
          <img src='icons/logo.png' alt="logo" />Budget Buddy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className='brand-name' >
              <img src='icons/logo.png' alt='logo' /><span>Your Username</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {
                menuData.map((item) => (
                  <Nav.Link
                    href={item.path}
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleActive(item.id)
                      handleClose()
                    }}>
                    <img src={item.img} alt={item.name} />
                    <span className='list-item-name'>{item.name}</span>
                  </Nav.Link>
                ))
              }
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default TopNav;
