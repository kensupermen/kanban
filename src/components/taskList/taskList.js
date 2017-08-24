import React, { Component } from 'react';
import Task from '../task/task';

class TaskList extends Component {

  render() {
    return (
      <div>
        { this.props.children }
        <hr />
        {
          this.props.taskList.map(function(itemToDo, index) {
            return <Task id={index} task={itemToDo}></Task>
          })
        }
      </div>
    );
  }
}

export default TaskList;
