import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(
  <div className='container'>
    <App />
  </div>
, document.getElementById('root'));
registerServiceWorker();
