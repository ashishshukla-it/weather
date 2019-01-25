import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

ReactDOM.render(<App />, document.getElementById('root')); // 1st argument what to be rendered, 2nd arg what to be rendered
serviceWorker.unregister();
