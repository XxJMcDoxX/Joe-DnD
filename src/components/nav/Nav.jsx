import React from 'react'
import './nav.css'
import { IoLogoFacebook } from "react-icons/io";
import { ImGithub } from "react-icons/im";
import { BsSnapchat } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="header__socials">
    <a href= "https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin/></a>
    <a href="https://github.com/XxJMcDoxX"  target="_blank" rel="noopener noreferrer"><ImGithub /></a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><IoLogoFacebook/></a>
    <a href= "https://www.snapchat.com" target="_blank" rel="noopener noreferrer"><BsSnapchat /></a>

    </div>
  )
}

export default Nav