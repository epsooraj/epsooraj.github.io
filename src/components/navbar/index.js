import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <MDBNavbar light expand>
        <MDBNavbarBrand>
          <strong>Ep Sooraj</strong>
        </MDBNavbarBrand>
        <MDBCollapse navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown dropleft>
                <MDBDropdownToggle nav>
                  <div>menu</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className='dropdown-default'>
                  <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Another Action</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href='#!'>
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
