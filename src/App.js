import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/index';
import Agriculture from './pages/agriculture';
import Medical from './pages/medical';
import Marketplace from './pages/marketplace/App';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/agriculture' element={<Agriculture />} />
        <Route path='/medical' element={<Medical />} />
        <Route path='/marketplace' element={<Marketplace />} />

      </Routes>
    </Router>
  );
}

export default App;