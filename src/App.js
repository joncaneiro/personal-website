import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import './src/index.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';


function App() {

  return (
    < div className='flex flex-col bg-indigo-700 w-screen h-screen'>
      <NavBar />
        <Routes>
          <Route path='/' element={ <About/> } />
          <Route path='/about' element={ <About/> } />
          <Route path='/projects' element={ <Projects/> } />
          <Route path='/skills' element={ <Skills />} />
          <Route path='/contact'  element={ <Contact/> } />
        </Routes>
    </div>
   
  );
};

export default App;
