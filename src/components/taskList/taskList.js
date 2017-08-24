import React, { Component } from 'react';
import Task from '../task/task';

class TaskList extends Component {
  render() {
    return (
      <div>
        <Task>{this.props.task}</Task>
      </div>
    );
  }
}

export default TaskList;
