import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './nametitle.css';

export default class NameTitle extends Component {
  render() {
    return (
      <MDBRow className='nametitle'>
        <MDBCol>
          <h2 className='display-3 text-center brand glitch'>Ep Sooraj</h2>
          <p className='lead text-center desc'>
            Machine Learning Enthusiast<br></br>Backend Web Developer
          </p>
        </MDBCol>
      </MDBRow>
    );
  }
}
