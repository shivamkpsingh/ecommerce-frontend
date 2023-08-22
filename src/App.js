import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/About';
import Register from './pages/auth/Register';
import Contact from './pages/Contact';
import Error from './pages/Error';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/register"  element={<Register/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App