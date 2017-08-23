import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className='form-group'>
        <input type="text" className='form-control text-muted' placeholder='What needs to be done?' />
      </div>
    );
  }
}

export default Input;
