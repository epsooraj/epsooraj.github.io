import React, { Component } from 'react';
import './home.css';
import Navbar from '../../components/navbar';
import NameTitle from '../../components/nametitle';
import SeriesSet from '../../components/series-set';
import RotatingXmasTree from '../../components/xmas-tree';
import { MDBBtn } from 'mdbreact';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SeriesSet />
        <NameTitle />
        {/* <RotatingXmasTree /> */}
      </React.Fragment>
    );
  }
}

export default Home;
