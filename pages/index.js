import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
            <Link href="/Courses">
              <a className="btn btn-primary">Get Started</a>
            </Link>
          </div>
          <div className="header__right">
            <div className="header__right-image">
              <Image src="/assests/header.svg" width={450} height={300} />
            </div>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <section className="categories">
        <div className="container categories__container">
          <div className="categories__left">
            <h1>Categories</h1>
            <p>
              Sunt culpa ad reprehenderit do dolore culpa sit labore dolor ipsum
              aute dolor est. Magna dolore esse exercitation enim minim fugiat
              nisi elit nisi.Sunt culpa ad reprehenderit do dolore culpa sit
              labore dolor ipsum aute dolor est. Magna dolore esse exercitation
              enim minim fugiat nisi elit nisi.
            </p>
            <Link href="/Courses">
              <a href="#" className="btn">
                Learn More
              </a>
            </Link>
          </div>

          <div className="categories__right">
            <article className="category">
              <span className="category__icon">
                <Unicons.UilBitcoinSign />
              </span>
              <h5>BlockChain</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>

            <article className="category">
              <span className="category__icon">
                <Unicons.UilPalette />
              </span>
              <h5>Graphic Design</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>

            <article className="category">
              <span className="category__icon">
                <Unicons.UilDollarSignAlt />
              </span>
              <h5>Finance</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>

            <article className="category">
              <span className="category__icon">
                <Unicons.UilBitcoinCircle />
              </span>
              <h5>Marketing</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>

            <article className="category">
              <span className="category__icon">
                <Unicons.UilMusic />
              </span>
              <h5>Music</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>

            <article className="category">
              <span className="category__icon">
                <Unicons.UilPuzzlePiece />
              </span>
              <h5>Business</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2>Our Popular Courses</h2>
        <div className="container courses__container">
          <article className="course">
            <div className="course__image">
              <Image src="/assests/course1.jpg" width={450} height={300} />
            </div>
            <div className="course__info">
              <h4>Responsive Social Media Website UI Design</h4>
              <p>
                Officia sit ea ex sint cupidatat ipsum elit consequat
                consectetur sint. Ut consequat occaecat mollit in eiusmod
                eiusmod id sint.
              </p>
            </div>
            <Link href="/Courses">
              <a href="" className="btn btn-primary">
                Learn More
              </a>
            </Link>
          </article>
          <article className="course">
            <div className="course__image">
              <Image src="/assests/course2.jpg" width={450} height={300} />
            </div>
            <div className="course__info">
              <h4>Responsive SmartHome Website Design</h4>
              <p>
                Officia sit ea ex sint cupidatat ipsum elit consequat
                consectetur sint. Ut consequat occaecat mollit in eiusmod
                eiusmod id sint.
              </p>
            </div>
            <Link href="/Courses">
              <a href="" className="btn btn-primary">
                Learn More
              </a>
            </Link>
          </article>
          <article className="course">
            <div className="course__image">
              <Image src="/assests/course3.jpg" width={450} height={300} />
            </div>
            <div className="course__info">
              <h4>Responsive Admin Dashboard UI Design</h4>
              <p>
                Officia sit ea ex sint cupidatat ipsum elit consequat
                consectetur sint. Ut consequat occaecat mollit in eiusmod
                eiusmod id sint.
              </p>
            </div>
            <Link href="/Courses">
              <a href="" className="btn btn-primary">
                Learn More
              </a>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
