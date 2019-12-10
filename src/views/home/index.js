import React, { Component } from 'react';
import './home.css';
import Navbar from '../../components/navbar';
import NameTitle from '../../components/nametitle';
import { MDBBtn } from 'mdbreact';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <NameTitle />
        {/* <MDBBtn gradient='peach'>Test</MDBBtn> */}
      </React.Fragment>
    );
  }
}

export default Home;
