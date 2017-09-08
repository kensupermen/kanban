import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const taskSource = {
  beginDrag(props, monitor, component) {
    return {
      id: props.id,
      name: props.task,
      parent: props.children
    };
  }, 

  endDrag(props, monitor, component) {
    // console.log('end drag', props);
    props.onChange();
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Task extends Component {

  remove() {
    console.log('removed')
    // this.state.todos.map(function(item, index){
      // if (item === this.props.task){
        // this.state.todos.splice(index, 1);
      // }
    // })
    // this.setState(this.state);
  };


  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div id={this.props.id} className='task' style={{opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
        <button type='button' className='close' onClick={this.remove}>×</button>
        {this.props.task}
      </div>
    );
  }
}

export default DragSource("Task1", taskSource, collect)(Task);
