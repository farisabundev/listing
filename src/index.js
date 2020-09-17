import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';
import Preload from './preload.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const LoadableComponent = Loadable({
  loader: () => import('./App'),
  loading() {
    return <Preload/>
  }
});

ReactDOM.render(
  <BrowserRouter>
    <LoadableComponent/>
  </BrowserRouter>,
document.getElementById('root'));