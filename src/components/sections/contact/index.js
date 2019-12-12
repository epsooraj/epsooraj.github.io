import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className='text-white text-center contact-container desc'>
        Contact
        <div>
          <a
            className='text-white email mrl-10'
            href={'mailto:epsooraj4@gmail.com'}
          >
            <i class='fas fa-at'></i>
          </a>

          <a className='text-white phone mrl-10' href={'tel:+919895985615'}>
            <i class='fas fa-voicemail'></i>
          </a>

          <a
            className='text-white whatsapp mrl-10'
            href='https://api.whatsapp.com/send?phone=+919895985615'
          >
            <i class='fab fa-whatsapp'></i>
          </a>

          <a
            className='text-white instagram mrl-10'
            href={'https://instagram.com/ep_sooraj'}
          >
            <i class='fab fa-instagram'></i>
          </a>

          <a
            className='text-white facebook mrl-10'
            href={'https://www.facebook.com/epsooraj/'}
          >
            <i class='fab fa-facebook-f'></i>
          </a>

          <a
            className='text-white twitter mrl-10'
            href={'https://twitter.com/ep_sooraj'}
          >
            <i class='fab fa-twitter'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
