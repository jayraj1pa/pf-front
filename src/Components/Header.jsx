import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header({insideDashBoard}) {
  return (
    <Navbar style={{ backgroundColor: '#85d786',zIndex:'1' }} className='position-fixed top-0 w-100'>
      <Container>
        <Navbar.Brand>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} className='fw-bolder fs-4'>
            <i className='fa-brands fa-stack-overflow fa-bounce'></i>
            Project Fair
          </Link>
        </Navbar.Brand>
       { insideDashBoard && <Button className='btn'>Logout</Button> }
      </Container>
    </Navbar>
  );
}

export default Header;
