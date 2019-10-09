import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';

// Load up all those Roboto fonts
WebFont.load({
  google: {
    families: ['Roboto: 400,400i,700']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
