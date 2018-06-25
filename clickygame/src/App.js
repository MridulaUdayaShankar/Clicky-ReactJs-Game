import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs.js";
import Home from "./components/pages/Home/Home.js";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);

export default App;

