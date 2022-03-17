import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <div className="header__left">
            <h1>Grow your skills to andvance your career path</h1>
            <p>
              Sunt culpa ad reprehenderit do dolore culpa sit labore dolor ipsum
              aute dolor est. Magna dolore esse exercitation enim minim fugiat
              nisi elit nisi. Sit mollit nostrud cupidatat fugiat ipsum officia
              dolor proident in ea elit cillum.
            </p>
            <a href="/Courses" className="btn btn-primary">
              Get Started
            </a>
          </div>
          <div className="header__right">
            <div className="header__right-image">
              <Image src="/assests/header.svg" width={500} height={500} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
