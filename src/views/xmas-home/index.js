import React, { Component } from 'react';
import './home.css';
import Navbar from '../../components/navbar';
import NameTitle from '../../components/nametitle';
import SeriesSet from '../../components/series-set';
import { MDBBtn } from 'mdbreact';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <SeriesSet />
        <NameTitle />
      </React.Fragment>
    );
  }
}

export default Home;
