import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

import Loading from './components/loading';
import Navbar from './components/navbar';
import Background from './components/background';
import Home from './components/pages/home';
import About from './components/pages/about';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Footer from './components/footer';
import './App.scss';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
  { path: '/contact', name: 'Contact', Component: Contact }
]

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Render App after playing loading animation
    setTimeout(() => setLoading(false), 5500)
  }, [])
  return (
    <>
    {loading === false ? (
      <div className="App">
      <Navbar />
      <Background />
      <div className="main-container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                  {Component !== Home ? <Footer /> : null}
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
      
    </div>
    ) : (
      <Loading />
    )}
    </>
    
    
  );
}

export { App as default, routes };
