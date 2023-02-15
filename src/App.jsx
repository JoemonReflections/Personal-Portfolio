import React from 'react'
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import SocMediaLinks from './components/SocMediaLinks'
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <SocMediaLinks />
      <Contact/>
    </>
  )
}

export default App