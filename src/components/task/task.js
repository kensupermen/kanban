import React, { Component } from 'react';

class Task extends Component {

  remove() {
    console.log('removed')
    // this.state.todos.map(function(item, index){
      // if (item === this.props.task){
        // this.state.todos.splice(index, 1);
      // }
    // })
    // this.setState(this.state);
  }

  drag(e) {
    e.dataTransfer.setData('text', e.target.id);
    console.log('dragging');
  }

  render() {
    return (
      <div id={this.props.id} className='task' draggable='true' 
        onDragStart={this.drag.bind(this)}>
        <button type='button' className='close' onClick={this.remove}>×</button>
        {this.props.task}
      </div>
    );
  }
}

export default Task;
