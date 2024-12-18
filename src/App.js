import React, { useContext ,useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'
import { Analytics } from "@vercel/analytics/react";
import './App.css'
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/my-path",
      title: "Custom Title",
    });
  });
  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
<Analytics/>
    </div>
  );
}

export default App;
