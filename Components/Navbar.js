import React, { useState, useEffect } from "react";
import * as Unicons from "@iconscout/react-unicons";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const onScroll = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div class="container nav__container">
          <a href="/">
            <h4>Educator</h4>
          </a>
          <ul className="nav__menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Courses">Coures</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
          <button className="btn" id="open-menu-btn">
            <Unicons.UilBars />
          </button>
          <button className="btn" id="close-menu-btn">
            <Unicons.UilMultiply />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
