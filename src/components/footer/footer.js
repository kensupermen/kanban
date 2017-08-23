import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer container'>
        <div className="text-center center-block">
          <a href="https://www.facebook.com"><i className="fa fa-facebook-square fa-2x social"></i></a>
          <a href="https://twitter.com"><i className="fa fa-twitter-square fa-2x social"></i></a>
          <a href="https://plus.google.com/"><i className="fa fa-google-plus-square fa-2x social"></i></a>
          <a href="mailto:votantho93@gmail.com"><i className="fa fa-envelope-square fa-2x social"></i></a>
        </div>
      </div>
    );
  }
}

export default Footer;
