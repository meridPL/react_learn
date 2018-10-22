import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListSklepow from './list';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ListSklepow name="test"/>, document.getElementById('root'));

serviceWorker.unregister();
