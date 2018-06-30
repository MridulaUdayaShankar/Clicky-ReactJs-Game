import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    </Router>
    );
  }

};
export default App;