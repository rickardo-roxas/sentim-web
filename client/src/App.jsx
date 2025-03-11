import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BeforeMidnight from './pages/BeforeMidnight';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/before-midnight" element={<BeforeMidnight />} />
      </Routes>
    </Router>
  );
}

export default App;
