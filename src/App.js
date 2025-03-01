
import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import Carousal from './components/Carousal';




function App() {
  return (
    
    <BrowserRouter>
      <Navbar/>
      
      
      {/* <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link className='nav-item' to='/'>Home</Link>
              <Link to='/about'>About</Link>
            </ul>
          </div>
        </nav>
      </header> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
