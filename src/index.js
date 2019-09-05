import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
