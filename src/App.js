import React, { Component } from 'react';
import './App.css';
import {Footer} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        Kanban app
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
