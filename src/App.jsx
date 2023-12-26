import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Healthy from './components/Pages/Healthy';
import Website from './components/Pages/Website';


function App() {
  return (
    <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Website/>} />
   <Route path="/home" element={<Home/>}/>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/healthy" element={<Healthy/>}/>
  
  </Routes>
   
</BrowserRouter>
  )
}

export default App;