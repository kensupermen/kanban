import React, { Component } from 'react';
import TaskList from '../taskList/taskList';

class Kanban extends Component {
  render() {
    return (
      <div className='row kanban'>
        <div className='col-4'>
          <TaskList task='Task arr'>TO DO:</TaskList>
        </div>

        <div className='col-4'>
          <TaskList>IN PROGRESS:</TaskList>
        </div>

        <div className='col-4'>
          <TaskList>DONE:</TaskList>
        </div>

      </div>
    );
  }
}

export default Kanban;
