import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/scroll';

ReactDOM.render(
  <HashRouter basename="/">
    <ScrollToTop />
    <Route path="/" component={App} />
  </HashRouter>,
  document.getElementById('root')
);
