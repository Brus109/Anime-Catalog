import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './views/Home';
import './App.css'

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
};

export default App;
