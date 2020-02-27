import React, { Component } from 'react';
import './xmashome.css';

import NameTitle from '../../../components/nametitle';
import SeriesSet from '../../../components/series-set';

import Contact from '../../../views/sections/contact-xmas';

class XmasHome extends Component {
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

export default XmasHome;
