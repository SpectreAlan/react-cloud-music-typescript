import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import 'lib-flexible';
const FastClick = require('fastclick');
FastClick.attach(document.body);

ReactDOM.render(<App />,document.getElementById('root'));
