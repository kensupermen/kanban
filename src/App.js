import React, { Component } from 'react';
import './App.css';
import {Kanban} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Kanban App</h3>
        <br />
        <Kanban></Kanban>
      </div>
    );
  }
}

export default App;
