import React, { Component } from 'react';
// import Task from '../task/task';

class TaskList extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <hr />
        {this.props.task}
      </div>
    );
  }
}

export default TaskList;
