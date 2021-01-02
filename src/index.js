import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/scroll';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
