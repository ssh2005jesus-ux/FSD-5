

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Certificate from './pages/Certificate';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
