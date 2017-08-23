import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className='card task'>
        <div className="card-block">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Task;
