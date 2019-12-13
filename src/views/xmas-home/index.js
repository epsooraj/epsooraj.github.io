import React, { Component } from 'react';
import './home.css';

import NameTitle from '../../components/nametitle';
import SeriesSet from '../../components/series-set';

import Skills from '../../components/sections/skills';
import Experience from '../../components/sections/experience';
import Education from '../../components/sections/education';
import Contact from '../../components/sections/contact';

import { MDBBtn } from 'mdbreact';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <SeriesSet />
        <NameTitle />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Home;
