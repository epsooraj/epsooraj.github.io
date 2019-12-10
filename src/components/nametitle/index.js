import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import './nametitle.css';

export default class NameTitle extends Component {
  render() {
    return (
      <MDBRow className='nametitle'>
        <MDBCol>
          <h2 className='display-3 text-center'>Ep Sooraj</h2>
          <p className='lead text-center'>
            Machine Learning Enthusiast | Backend Web Developer
          </p>
        </MDBCol>
      </MDBRow>
    );
  }
}
