// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

import Home from './Home';
import About from './About';
import Content from './Content';
import Contact from './Contact';
import HeaderComp from './Header';
import Sidenav from './Sidenav';
import Portfolio from './side/Portfolio';


function App() {
  
  return (
    <div className='appwidth'>

      <div>
        <BrowserRouter>
        <HeaderComp />
        <div className='d-flex'>
          <div>
          <Sidenav />
          </div>
          <div className='container-fluid p-4 rightside'>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/content" element={<Content />} />
              <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </div>
        </BrowserRouter>
      </div>
    </div>

    

  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
