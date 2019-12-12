import React, { Component } from 'react';
import './rainbow-text.css';
import PropTypes from 'prop-types';

class RainbowText extends Component {
  render() {
    return <p className='rainbow_text_animated'>{this.props.value}</p>;
  }
}

RainbowText.propTypes = {
  value: PropTypes.string
}

export default RainbowText;