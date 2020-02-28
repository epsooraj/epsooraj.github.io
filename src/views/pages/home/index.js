import React, { Component } from "react";

import Header from '../../sections/home/header';
import Experience from '../../sections/home/experience';
import Skill from '../../sections/home/skill';
import Ido from '../../sections/home/ido';
import Portfolio from '../../sections/home/portfolio';
import Education from '../../sections/home/education';
import Contact from '../../sections/home/contact';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Experience />
        <Skill />
		<Ido />
		<Portfolio />
		<Education />
		<Contact />
      </React.Fragment>
    );
  }
}

export default Home;
