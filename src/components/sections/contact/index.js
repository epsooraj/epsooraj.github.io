import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
  render() {
    return (
      <div className='text-white text-center contact-container'>
        <p className='display-4'>Contact</p>
        <div>
          <a
            className='text-white contact-icon email mrl-10'
            href={'mailto:epsooraj4@gmail.com'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fas fa-at'></i>
          </a>

          <a
            className='text-white contact-icon phone mrl-10'
            href={'tel:+919895985615'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fas fa-voicemail'></i>
          </a>

          <a
            className='text-white contact-icon whatsapp mrl-10'
            href='https://api.whatsapp.com/send?phone=+919895985615'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-whatsapp'></i>
          </a>

          <a
            className='text-white contact-icon instagram mrl-10'
            href={'https://instagram.com/ep_sooraj'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-instagram'></i>
          </a>

          <a
            className='text-white contact-icon facebook mrl-10'
            href={'https://www.facebook.com/epsooraj/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-facebook-f'></i>
          </a>

          <a
            className='text-white contact-icon twitter mrl-10'
            href={'https://twitter.com/ep_sooraj'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fab fa-twitter'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
