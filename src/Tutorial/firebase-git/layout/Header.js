import React, { useContext, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavLink,
  Nav,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Header() {
  const context = useContext(UserContext);
  console.log(context);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar color='info' light expand='md'>
      <NavbarBrand>
        <Link to='/' className='ms-3 text-white text-decoration-none'>
          Github Firebase
        </Link>
      </NavbarBrand>
      <NavbarText>{context.user?.email ? context.user.email : ''}</NavbarText>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse navbar isOpen={isOpen}>
        <Nav navbar className='ms-auto me-3'>
          {context.user ? (
            <NavItem>
              <NavLink tag={Link} to='/' className='text-white ps-3'>
                Sign Out
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to='/signin' className='text-white ps-3'>
                  Sign In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to='/signup' className='text-white ps-3'>
                  Sign Up
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
