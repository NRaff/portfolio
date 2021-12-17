import React from "react"
import Contact from "./contact";

const Nav = () => {

  return (
    <nav className="top-nav">
      <h1>Nick Raff</h1>
      <h1 className="contact">
        <span>Contact</span>
        <div className="hover-area"></div>
        <Contact />
      </h1>
    </nav>
  )
}

export default Nav;
