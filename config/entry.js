import React from 'react'
import ReactDOM from 'react-dom'

import Component from '../src/index.js';
import props from '../src/example-props.js';

ReactDOM.render(
  <Component { ...props } />,
  document.getElementById('app')
)
