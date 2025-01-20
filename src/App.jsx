
import Navbar from './Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import MovieDetails from './MovieDetails';
import Footer from './Footer';
import React from 'react';

function App() {
  return (
    <div className="App page-wrap">
      <BrowserRouter>
     <Navbar className=""/>
     <Routes>
      <Route >
        <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
      <Route path="/movies/:title" element={<MovieDetails/>}/>
     
     </Routes>
     <Footer className="site-footer   "/>
     </BrowserRouter>
    </div>
  );
}

export default App;
