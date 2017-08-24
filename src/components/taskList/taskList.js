import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    return (
      <div className='card task'>
        <div className="card-block">
          {this.props.task}
        </div>
      </div>
    );
  }
}

export default TaskList;
