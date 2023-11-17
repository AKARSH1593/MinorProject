// import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Navbar1 from './components/Navbar1';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar1/>
        <div className="cont">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
