import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer"
import Home from "./pages/Home";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Main>
        <Route exact path="/" component={Home} />
      </Main>
      <Footer />
    </div>
  </Router>

);

export default App;

