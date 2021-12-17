import React from "react"
import Contact from "./contact";

const Nav = () => {

  return (
    <nav className="top-nav">
      <img
        className="profile-img"
        src="frontend/assets/nick_raff.jpg"
        alt="Nick Raff Headshot"
      />
      <h1 className="profile">
        <span>Nick Raff</span>
        <div className="hover-area"></div>
      </h1>
      <h1 className="contact">
        <span>Contact</span>
        <div className="hover-area"></div>
        <Contact />
      </h1>
    </nav>
  )
}

export default Nav;
