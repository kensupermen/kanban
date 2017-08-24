import React, { Component } from 'react';
import TaskList from '../taskList/taskList';

class Kanban extends Component {
  state = {
    todo: [],
    inProgress: ['d', 'e', 'f'],
    done: ['g', 'h', 'i', 'j']
  }

  add(e) {
    if (e.keyCode === 13) {
      let txtToDo = this.refs.txtToDo.value;
      this.state.todo.push(txtToDo);
      this.setState(this.state);
      this.refs.txtToDo.value = '';
    }
  }
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-12 form-group'>
              <input onKeyDown={this.add.bind(this)} ref='txtToDo' type="text" className='form-control text-muted' placeholder='What needs to be done?' />
          </div>
        </div>
        <div className='row kanban'>
          <div className='col-4'>
            TO DO:
            <hr />
            {
              this.state.todo.map(function(todoList) {
                return <TaskList task={todoList}>TO DO:</TaskList>
              })
            }
          </div>

          <div className='col-4'>
            IN PROGRESS:
            <hr />
            {
              this.state.inProgress.map(function(inProgressList) {
                return <TaskList task={inProgressList}>TO DO:</TaskList>
              })
            }
          </div>

          <div className='col-4'>
            DONE:
            <hr />
            {
              this.state.done.map(function(doneList) {
                return <TaskList task={doneList}>TO DO:</TaskList>
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Kanban;
