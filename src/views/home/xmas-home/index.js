import React, { Component } from 'react';
import './home.css';

import NameTitle from '../../../components/nametitle';
import SeriesSet from '../../../components/series-set';

import Contact from '../../../views/sections/contact-xmas';

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
