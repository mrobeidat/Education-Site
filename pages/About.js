import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";
import aos from "aos";

import * as Unicons from "@iconscout/react-unicons";

const Header = () => {
  useEffect(() => {
    aos.init({
      disable: false,
      duration: 2000,
    });
  }, []);
  return (
    <>
      {/* Achievements Section */}
      <section
        data-aos="fade-top"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top"
        className="about__achievements"
      >
        <div className="container about__achievements-container">
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="about__achievements-left"
          >
            <Image
              src="/assests/about achievements.svg"
              width={450}
              height={300}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="about__achievements-right"
          >
            <h1>Achievements</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              soluta quos, iste est blanditiis adipisci quaerat veritatis. Nihil
              et libero similique aspernatur quos, minima illo suscipit ratione
              facere doloribus corrupti?
            </p>
            <div class="achievements__cards">
              <article
                data-aos="slide-up"
                data-aos-delay="100"
                data-aos-once="true"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top"
                className="achievement__card"
              >
                <span className="achievement__icon">
                  <Unicons.UilVideo />
                </span>
                <h3>450+</h3>
                <p>Courses</p>
              </article>
              <article
                data-aos="slide-up"
                data-aos-delay="250"
                data-aos-once="true"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top"
                className="achievement__card"
              >
                <span className="achievement__icon">
                  <Unicons.UilBookReader />
                </span>
                <h3>79,000+</h3>
                <p>Students</p>
              </article>
              <article
                data-aos="slide-up"
                data-aos-delay="450"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                data-aos-anchor-placement="top"
                className="achievement__card"
              >
                <span className="achievement__icon">
                  <Unicons.UilAward />
                </span>
                <h3>26</h3>
                <p>Awards</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="container team__container">
          <article
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="team__member"
          >
            <div className="team__member-image">
              <Image
                className="img"
                src="/assests/tm1.jpg"
                width={450}
                height={480}
              />
            </div>
            <div className="team__member-info">
              <h4>Shatta Wale</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <Link href="https://instagram.com">
                <a className="">
                  <Unicons.UilInstagram />
                </a>
              </Link>
              <Link href="https://twitter.com">
                <a className="">
                  <Unicons.UilTwitter />
                </a>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <a className="">
                  <Unicons.UilLinkedinAlt />
                </a>
              </Link>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="team__member"
          >
            <div className="team__member-image">
              <Image
                className="img"
                src="/assests/tm2.jpg"
                width={450}
                height={480}
              />
            </div>
            <div className="team__member-info">
              <h4>Shatta Wale</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <Link href="https://instagram.com">
                <a className="">
                  <Unicons.UilInstagram />
                </a>
              </Link>
              <Link href="https://twitter.com">
                <a className="">
                  <Unicons.UilTwitter />
                </a>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <a className="">
                  <Unicons.UilLinkedinAlt />
                </a>
              </Link>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="250"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="team__member"
          >
            <div className="team__member-image">
              <Image
                className="img"
                src="/assests/tm3.jpg"
                width={450}
                height={480}
              />
            </div>
            <div className="team__member-info">
              <h4>Mia Jones</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <Link href="https://instagram.com">
                <a className="">
                  <Unicons.UilInstagram />
                </a>
              </Link>
              <Link href="https://twitter.com">
                <a className="">
                  <Unicons.UilTwitter />
                </a>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <a className="">
                  <Unicons.UilLinkedinAlt />
                </a>
              </Link>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="350"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="team__member"
          >
            <div className="team__member-image">
              <Image
                className="img"
                src="/assests/tm4.jpg"
                width={450}
                height={480}
              />
            </div>
            <div className="team__member-info">
              <h4>Diana Ayi</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <Link href="https://instagram.com">
                <a className="">
                  <Unicons.UilInstagram />
                </a>
              </Link>
              <Link href="https://twitter.com">
                <a className="">
                  <Unicons.UilTwitter />
                </a>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <a className="">
                  <Unicons.UilLinkedinAlt />
                </a>
              </Link>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="450"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="team__member"
          >
            <div className="team__member-image">
              <Image
                className="img"
                src="/assests/tm5.jpg"
                width={450}
                height={480}
              />
            </div>
            <div className="team__member-info">
              <h4>John Dumelo</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <Link href="https://instagram.com">
                <a className="">
                  <Unicons.UilInstagram />
                </a>
              </Link>
              <Link href="https://twitter.com">
                <a className="">
                  <Unicons.UilTwitter />
                </a>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <a className="">
                  <Unicons.UilLinkedinAlt />
                </a>
              </Link>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="550"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="team__member"
          >
            <div className="team__member-image">
              <Image
                className="img"
                src="/assests/tm6.jpg"
                width={450}
                height={480}
              />
            </div>
            <div className="team__member-info">
              <h4>Ruth Shockings</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <Link href="https://instagram.com">
                <a className="">
                  <Unicons.UilInstagram />
                </a>
              </Link>
              <Link href="https://twitter.com">
                <a className="">
                  <Unicons.UilTwitter />
                </a>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <a className="">
                  <Unicons.UilLinkedinAlt />
                </a>
              </Link>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="650"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="team__member"
          >
            <div className="team__member-image">
              <Image
                className="img"
                src="/assests/tm7.jpg"
                width={450}
                height={480}
              />
            </div>
            <div className="team__member-info">
              <h4>Edem Quist</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <Link href="https://instagram.com">
                <a className="">
                  <Unicons.UilInstagram />
                </a>
              </Link>
              <Link href="https://twitter.com">
                <a className="">
                  <Unicons.UilTwitter />
                </a>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <a className="">
                  <Unicons.UilLinkedinAlt />
                </a>
              </Link>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="750"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="team__member"
          >
            <div className="team__member-image">
              <Image
                className="img"
                src="/assests/tm8.jpg"
                width={450}
                height={480}
              />
            </div>
            <div className="team__member-info">
              <h4>Menz Gold</h4>
              <p>Expert Tutor</p>
            </div>
            <div className="team__member-socials">
              <Link href="https://instagram.com">
                <a className="">
                  <Unicons.UilInstagram />
                </a>
              </Link>
              <Link href="https://twitter.com">
                <a className="">
                  <Unicons.UilTwitter />
                </a>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <a className="">
                  <Unicons.UilLinkedinAlt />
                </a>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Header;
