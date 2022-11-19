import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import {Parallax} from 'react-parallax'
import castle from './assets/dragon.jpg'

const App = () => {
  return (
    <>
    <Parallax bgImage={castle} strength = {400}>
    <Header/>
    <About/>
    <Footer />
    </Parallax>
    </>
  )
}

export default App