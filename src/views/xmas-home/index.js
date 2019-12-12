import React, { Component } from 'react';
import './home.css';
import NameTitle from '../../components/nametitle';
import SeriesSet from '../../components/series-set';
import Experience from '../../components/sections/experience';
import Contact from '../../components/sections/contact';
import { MDBBtn } from 'mdbreact';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SeriesSet />
        <NameTitle />
        <Experience />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Home;
