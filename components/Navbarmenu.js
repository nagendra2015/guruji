import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";


function Navbarmenu()
{
    return <>
    
    
    <Navbar  variant="dark" expand="lg" className='pageMenustrip'  >
      <Container >
        {/* <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand> */}
        <div className='navbar-brand'>
        <Link href="/" className='nav-link'>
        <img src="/static/sylogo.png" alt="swaryoa" style={{maxHeight: 30}} /> 
       <span className='fs-2'> <b> swara yoga</b></span>
        </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className='navbar-nav ms-auto mb-2 mb-lg-0'>
             
          <Link href="/" className='nav-link'>
           Home page
        </Link>

        <Link href="/about" className='nav-link'>
           About Page
        </Link>

        <Link href="/contact" className='nav-link'>
           Contact Page
        </Link>

             
 
             

          
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='dropbtn'>
            <i className="fa fa-caret-down"></i>
            <Link href="/contact" className='dropdown-item'>
           Contact Page
        </Link>
        <NavDropdown.Divider />
        <Link href="/about" className='dropdown-item'>
           about Page
        </Link>
        <NavDropdown.Divider />
        <Link href="/" className='dropdown-item'>
           Home
        </Link>


              <NavDropdown.Item href="/about">Action</NavDropdown.Item>
              <NavDropdown.Item href="/contact">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about">Action</NavDropdown.Item>
              <NavDropdown.Item href="/contact">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
    
    </>
}

export default Navbarmenu