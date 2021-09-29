import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Navbar,Nav,NavDropdown} from 'react-bootstrap'
import CartWidget from './CartWidget'
const NavBar = () => {
    return( 
     <>
      <Navbar bg="success" expand="lg">
      <Navbar.Brand href="#">CELUTIENDA</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1">INICIO</Nav.Link>
          <Nav.Link href="#action2">CONTACTO</Nav.Link>
          <NavDropdown title="MENU" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Por Modelos</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Por Precio</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Ver y Comprar</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>
            
          </Nav.Link>
        </Nav>
                                       {/* PARA POSIBLE USO FUTURO

        <Dropdown as={ButtonGroup}>
  <Button variant="dark">Marcas disponibles</Button>

  <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Samsung</Dropdown.Item>
    <Dropdown.Item href="#/action-2">iPhone</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Motorola</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-danger">Buscar</Button>
          
        </Form>
                                       */}
       <CartWidget/>                                  
      </Navbar.Collapse>
</Navbar>
     </>
     
    )
}

export default NavBar;