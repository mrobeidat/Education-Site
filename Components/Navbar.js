import React, { useState, useEffect } from "react";
import * as Unicons from "@iconscout/react-unicons";

import "aos/dist/aos.css";
import aos from "aos";

const Navbar = () => {
  useEffect(() => {
    aos.init({
      disable: false,
      duration: 2000,
    });
  }, []);

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
          <a
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            href="/"
          >
            <h4>Educator</h4>
          </a>
          <ul className="nav__menu">
            <li
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <a href="/">Home</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <a href="/About">About</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
              <a href="/Courses">Coures</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="700"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
            >
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
