import React, { Component } from 'react';
import TaskList from '../taskList/taskList';

class Kanban extends Component {
  state = {
    todos: ['a', 'b', 'c'],
    inProgresses: ['d', 'e', 'f'],
    dones: ['g', 'h', 'i', 'j']
  }

  add(e) {
    if (e.keyCode === 13) {
      let txtToDo = this.refs.txtToDo.value;
      if (txtToDo.length === 0)
        return
      this.state.todo.push(txtToDo);
      this.setState(this.state);
      this.refs.txtToDo.value = '';
    }
  }

  allowDrop(e) {
    e.preventDefault();
  }


  drop(e) {
    e.preventDefault();
    let tag = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(tag));
    console.log('dropping');
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-12 form-group'>
            <input onKeyDown={this.add.bind(this)} ref='txtToDo' type="text" 
              className='form-control text-muted' placeholder='What needs to be done?' />
          </div>
        </div>
        <div className='row kanban'>
          <div id='todo' className='col-4' onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
            <TaskList taskList={this.state.todos}>TO DO:</TaskList>
          </div>

          <div id='inProgress' className='col-4' onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
            <TaskList taskList={this.state.inProgresses}>IN PROGRESS:</TaskList>
          </div>

          <div id='done' className='col-4'>
            <TaskList taskList={this.state.dones}>DONE:</TaskList>
          </div>
        </div>
      </div>
    );
  }
}

export default Kanban;
