import React, { Component } from 'react';
import TaskList from '../taskList/taskList';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Kanban extends Component {
  state = {
    todos: ['learning react', 'learning ruby', 'learning golang'],
    inProgresses: ['read clean code', 'read complete code'],
    dones: []
  }

  add(e) {
    if (e.keyCode === 13) {
      let txtToDo = this.refs.txtToDo.value;
      if (txtToDo.length === 0)
        return
      this.state.todos.push(txtToDo);
      this.setState(this.state);
      this.refs.txtToDo.value = '';
    }
  }

  removeItem(array1, array2){
    array1.map((array1Item, array1Index) => {
      array2.map((array2Item, array2Index) => {
        if(array1Item === array2Item)
          array2.splice(array2Index, 1)
        return array2
      });
      return array1
    });
  }

  handleOnChange() {
    let todoItems = this.state.todos;
    let inProgressItems = this.state.inProgresses;
    let doneItems = this.state.dones;

    this.removeItem(doneItems, inProgressItems);
    this.removeItem(inProgressItems, todoItems);

    this.setState({
      todos: todoItems,
      inProgresses: inProgressItems,
      dones: doneItems,
    });
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
          <div id='todo' className='col-4'>
            <TaskList taskList={this.state.todos} onChange={()=> this.handleOnChange()}>TO DO:</TaskList>
          </div>

          <div id='inProgress' className='col-4'>
            <TaskList taskList={this.state.inProgresses} onChange={()=> this.handleOnChange()}>IN PROGRESS:</TaskList>
          </div>

          <div id='done' className='col-4'>
            <TaskList taskList={this.state.dones} onChange={() => this.handleOnChange()}>DONE:</TaskList>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);
