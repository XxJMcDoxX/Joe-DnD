import React from 'react'
import './header.css'
import Navbar from '../../components/nav/Nav'
import Joe from '../../assets/joe.jpg'
import { Parallax } from 'react-parallax';
import dice from '../../assets/dice.jpg'

const Header = () => {
  return (
    <Parallax bgImage={dice} strength={200}>
      <section>
        <header>
          <div className="container header__container">
            <h5>Joe Locey</h5>
            <h2>Dungeon Master</h2>
          </div>
            <Navbar />
            <div className="image__container">
              <img src={Joe} alt="" />
            </div>
        </header>
      </section>
    </Parallax>
  )
}

export default Header