import React, { Component } from 'react';
import './App.css';
import {Input, Kanban} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Kanban App</h3>
        <Input></Input>
        <Kanban></Kanban>
      </div>
    );
  }
}

export default App;
