import React, { Component } from 'react';
import Task from '../task/task';
import { DropTarget } from 'react-dnd';

const dropField = {
  drop(props, monitor, component) {
    let taskList = props.taskList;
    taskList.push(monitor.getItem().name);
  }

};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class TaskList extends Component {

  state = {
    name: this.props.children,
    taskList: this.props.taskList
  }

  handleOnChange(e) {
    this.props.onChange();
  }

  render() {
    const { connectDropTarget, isOver } = this.props;
    let taskListName = this.props.children;

    return connectDropTarget(
        <div style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}>
        { this.props.children }
        <hr />
        {
          this.state.taskList.map((itemToDo, index) => {
            return <Task key={index} id={index} task={itemToDo} onChange={() => this.handleOnChange()} >{ taskListName }</Task>
          })
        }

        {isOver &&
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }} />
        }
      </div>
    );
  }
}

export default DropTarget("Task1", dropField, collect)(TaskList);
