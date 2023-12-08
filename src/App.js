import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navabar from './Components/Navabar';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
<>
<BrowserRouter>
<Navabar/>
  <Routes>
    <Route path='/' element={<Home/>}>Home</Route>
  </Routes>
  <Footer/>
</BrowserRouter>
</>
  );
}

export default App;
