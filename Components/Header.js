import React from "react";
import * as Unicons from "@iconscout/react-unicons";
const Header = () => {
  return (
    <>
      <nav>
        <div class="container nav__container">
          <a href="/">
            <h4>Egator</h4>
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

export default Header;
