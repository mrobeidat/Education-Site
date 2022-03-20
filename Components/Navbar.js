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

    const menu = document.querySelector(".nav__menu");
    const openBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");
    openBtn.addEventListener("click", () => {
      menu.style.display = "flex";
      closeBtn.style.display = "inline-block";
      openBtn.style.display = "none";
    });

    const closeNav = () => {
      menu.style.display = "none";
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
    };

    closeBtn.addEventListener("click", closeNav);
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
