import React, { Component } from 'react';

import './header.css';
import AgencyClassicBg from '../../../../assets/images/twilight.jpg';

import {Navbar} from 'react-bootstrap';

class Header extends Component {
	render() {
		var header_style = {
			backgroundImage: `url(${AgencyClassicBg})`
		};

		var navbar_style = {
			background: 'transparent',
		};

		// var 

		return (
			<header className="header" style={header_style}>
				<Navbar className="noshadow" style={navbar_style}>
					<Navbar.Brand className="navbrand text-white">Ep Sooraj</Navbar.Brand>
  					<Navbar.Toggle />
  					<Navbar.Collapse className="justify-content-end">
    					<Navbar.Text className="text-white">
      						Hamburger
    					</Navbar.Text>
  					</Navbar.Collapse>
				</Navbar>

				<div className="main-desc-div">
					<h1 className="main-desc text-white">
						Let me bring your<br />
						Imaginations to Life.
					</h1>
				</div>
			</header>
		);
	}

}

export default Header;