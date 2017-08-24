import React, { Component } from 'react';

class Task extends Component {
  drag(e) {
    e.dataTransfer.setData('text', e.target.id);
    console.log('dragging');
  }

  render() {
    return (
      <div id={this.props.id} className='card task' draggable='true' onDragStart={this.drag.bind(this)}>
        <div className="card-block">
          {this.props.task}
        </div>
      </div>
    );
  }
}

export default Task;
