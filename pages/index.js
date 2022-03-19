import React, { useEffect, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";

import { Pagination } from "swiper";
import aos from "aos";

export default function Home() {
  useEffect(() => {
    aos.init({ duration: 2000 });

    const faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        const icon = faq.querySelector(".faq__icon");
        if (icon.className === "uil uil-plus") {
          icon.className === "uil uil-minus";
        }
      });
    });
  }, []);

  return (
    <>
      <header>
        <div className="container header__container">
          <div 
             data-aos="slide-right"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true"
             data-aos-anchor-placement="top-center"
          className="header__left">
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
          <div
          data-aos="slide-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className="header__right">
            <div className="header__right-image">
              <Image src="/assests/header.svg" width={450} height={300} />
            </div>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <section className="categories">
        <div className="container categories__container">
          <div
             data-aos="fade-zoom-in"
             data-aos-offset="50"
             data-aos-delay="50"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             data-aos-mirror="true"
             data-aos-once="true"
             data-aos-anchor-placement="top-center"
          className="categories__left">
            <h1>Categories</h1>
            <p>
              Sunt culpa ad reprehenderit do dolore culpa sit labore dolor ipsum
              aute dolor est. Magna dolore esse exercitation enim minim fugiat
              nisi elit nisi.Sunt culpa ad reprehenderit do dolore culpa sit
              labore dolor ipsum aute dolor est. Magna dolore esse exercitation
              enim minim fugiat nisi elit nisi.
            </p>
            <Link href="/Courses">
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </Link>
          </div>

          <div className="categories__right">
            <article
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="category">
              <span className="category__icon">
                <Unicons.UilBitcoinSign />
              </span>
              <h5>BlockChain</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>

            <article
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="category">
              <span className="category__icon">
                <Unicons.UilPalette />
              </span>
              <h5>Graphic Design</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>

            <article
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="category">
              <span className="category__icon">
                <Unicons.UilDollarSignAlt />
              </span>
              <h5>Finance</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>

            <article
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-delay="700"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="category">
              <span className="category__icon">
                <Unicons.UilBitcoinCircle />
              </span>
              <h5>Marketing</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>

            <article
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-delay="900"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="category">
              <span className="category__icon">
                <Unicons.UilMusic />
              </span>
              <h5>Music</h5>
              <p>
                Sunt culpa ad reprehenderit do dolore culpa sit labore dolor.
              </p>
            </article>

            <article
            data-aos="fade-down"
            data-aos-offset="50"
            data-aos-delay="900"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
            className="category">
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
          <article
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className="course">
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

          <article
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className="course">
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

          <article
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          className="course">
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

      {/* FAQ Section */}
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="faqs"
      >
        <h2>Frequently Asked Questions</h2>
        <div className="container faqs__container">
          <article className="faq open">
            <div className="faq__icon">
              <Unicons.UilPlus className="uil uil-plus" />
            </div>
            <div className="question__answer">
              <h4>How do i know the right courses for me?</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur ipsam perferendis iure deserunt distinctio
                optio impedit ex! Ab minus vero facere id deleniti. Assumenda, a
                error iste necessitatibus modi saepe, id asperiores vitae
                consectetur eius reiciendis accusamus omnis recusandae animi,
                impedit blanditiis sed? Aliquid rerum asperiores repellat,
                dignissimos blanditiis, enim, voluptatem tempore vitae
                architecto ut odio. Dolorum, ea maiores?
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <Unicons.UilPlus />
            </div>
            <div className="question__answer">
              <h4>How do i know the right courses for me?</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur ipsam perferendis iure deserunt distinctio
                optio impedit ex! Ab minus vero facere id deleniti. Assumenda, a
                error iste necessitatibus modi saepe, id asperiores vitae
                consectetur eius reiciendis accusamus omnis recusandae animi,
                impedit blanditiis sed? Aliquid rerum asperiores repellat,
                dignissimos blanditiis, enim, voluptatem tempore vitae
                architecto ut odio. Dolorum, ea maiores?
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <Unicons.UilPlus />
            </div>
            <div className="question__answer">
              <h4>How do i know the right courses for me?</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur ipsam perferendis iure deserunt distinctio
                optio impedit ex! Ab minus vero facere id deleniti. Assumenda, a
                error iste necessitatibus modi saepe, id asperiores vitae
                consectetur eius reiciendis accusamus omnis recusandae animi,
                impedit blanditiis sed? Aliquid rerum asperiores repellat,
                dignissimos blanditiis, enim, voluptatem tempore vitae
                architecto ut odio. Dolorum, ea maiores?
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <Unicons.UilPlus />
            </div>
            <div className="question__answer">
              <h4>How do i know the right courses for me?</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur ipsam perferendis iure deserunt distinctio
                optio impedit ex! Ab minus vero facere id deleniti. Assumenda, a
                error iste necessitatibus modi saepe, id asperiores vitae
                consectetur eius reiciendis accusamus omnis recusandae animi,
                impedit blanditiis sed? Aliquid rerum asperiores repellat,
                dignissimos blanditiis, enim, voluptatem tempore vitae
                architecto ut odio. Dolorum, ea maiores?
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <Unicons.UilPlus />
            </div>
            <div className="question__answer">
              <h4>How do i know the right courses for me?</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur ipsam perferendis iure deserunt distinctio
                optio impedit ex! Ab minus vero facere id deleniti. Assumenda, a
                error iste necessitatibus modi saepe, id asperiores vitae
                consectetur eius reiciendis accusamus omnis recusandae animi,
                impedit blanditiis sed? Aliquid rerum asperiores repellat,
                dignissimos blanditiis, enim, voluptatem tempore vitae
                architecto ut odio. Dolorum, ea maiores?
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <Unicons.UilPlus />
            </div>
            <div className="question__answer">
              <h4>How do i know the right courses for me?</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur ipsam perferendis iure deserunt distinctio
                optio impedit ex! Ab minus vero facere id deleniti. Assumenda, a
                error iste necessitatibus modi saepe, id asperiores vitae
                consectetur eius reiciendis accusamus omnis recusandae animi,
                impedit blanditiis sed? Aliquid rerum asperiores repellat,
                dignissimos blanditiis, enim, voluptatem tempore vitae
                architecto ut odio. Dolorum, ea maiores?
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <Unicons.UilPlus />
            </div>
            <div className="question__answer">
              <h4>How do i know the right courses for me?</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur ipsam perferendis iure deserunt distinctio
                optio impedit ex! Ab minus vero facere id deleniti. Assumenda, a
                error iste necessitatibus modi saepe, id asperiores vitae
                consectetur eius reiciendis accusamus omnis recusandae animi,
                impedit blanditiis sed? Aliquid rerum asperiores repellat,
                dignissimos blanditiis, enim, voluptatem tempore vitae
                architecto ut odio. Dolorum, ea maiores?
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <Unicons.UilPlus />
            </div>
            <div className="question__answer">
              <h4>How do i know the right courses for me?</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur ipsam perferendis iure deserunt distinctio
                optio impedit ex! Ab minus vero facere id deleniti. Assumenda, a
                error iste necessitatibus modi saepe, id asperiores vitae
                consectetur eius reiciendis accusamus omnis recusandae animi,
                impedit blanditiis sed? Aliquid rerum asperiores repellat,
                dignissimos blanditiis, enim, voluptatem tempore vitae
                architecto ut odio. Dolorum, ea maiores?
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <Unicons.UilPlus />
            </div>
            <div className="question__answer">
              <h4>How do i know the right courses for me?</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur ipsam perferendis iure deserunt distinctio
                optio impedit ex! Ab minus vero facere id deleniti. Assumenda, a
                error iste necessitatibus modi saepe, id asperiores vitae
                consectetur eius reiciendis accusamus omnis recusandae animi,
                impedit blanditiis sed? Aliquid rerum asperiores repellat,
                dignissimos blanditiis, enim, voluptatem tempore vitae
                architecto ut odio. Dolorum, ea maiores?
              </p>
            </div>
          </article>

          <article className="faq">
            <div className="faq__icon">
              <Unicons.UilPlus />
            </div>
            <div className="question__answer">
              <h4>How do i know the right courses for me?</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora aspernatur ipsam perferendis iure deserunt distinctio
                optio impedit ex! Ab minus vero facere id deleniti. Assumenda, a
                error iste necessitatibus modi saepe, id asperiores vitae
                consectetur eius reiciendis accusamus omnis recusandae animi,
                impedit blanditiis sed? Aliquid rerum asperiores repellat,
                dignissimos blanditiis, enim, voluptatem tempore vitae
                architecto ut odio. Dolorum, ea maiores?
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Testimonials Section */}

      <section
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
      className="container testimonials__container">
        <h2>Students' Testimonials</h2>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
          >
            <article className="testimonial">
              <SwiperSlide>
                <div className="avatar">
                  <Image src="/assests/avatar1.jpg" width={450} height={450} />
                </div>
                <div className="testimonial">
                  <h5>Diana Ayi</h5>
                  <small>Student</small>
                </div>
                <div className="testimonial__body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure cupiditate commodi quas facilis dolores est quia
                    consequuntur dolor voluptates labore, illum sequi officia
                    quaerat velit tempore odit quasi fugit?
                  </p>
                </div>
              </SwiperSlide>
            </article>

            <article className="testimonial">
              <SwiperSlide>
                <div className="avatar">
                  <Image src="/assests/avatar2.jpg" width={450} height={450} />
                </div>
                <div className="testimonial">
                  <h5>Ernest Achiever</h5>
                  <small>Web Developer</small>
                </div>
                <div className="testimonial__body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure cupiditate commodi quas facilis dolores est quia
                    consequuntur dolor voluptates labore, illum sequi officia
                    quaerat velit tempore odit quasi fugit?
                  </p>
                </div>
              </SwiperSlide>
            </article>

            <article className="testimonial">
              <SwiperSlide>
                <div className="avatar">
                  <Image src="/assests/avatar3.jpg" width={450} height={450} />
                </div>
                <div className="testimonial">
                  <h5>Edem Quist</h5>
                  <small>Teacher</small>
                </div>
                <div className="testimonial__body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure cupiditate commodi quas facilis dolores est quia
                    consequuntur dolor voluptates labore, illum sequi officia
                    quaerat velit tempore odit quasi fugit?
                  </p>
                </div>
              </SwiperSlide>
            </article>

            <article className="testimonial">
              <SwiperSlide>
                <div className="avatar">
                  <Image src="/assests/avatar4.jpg" width={450} height={450} />
                </div>
                <div className="testimonial">
                  <h5>Hajia Bintu</h5>
                  <small>Doctor</small>
                </div>
                <div className="testimonial__body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure cupiditate commodi quas facilis dolores est quia
                    consequuntur dolor voluptates labore, illum sequi officia
                    quaerat velit tempore odit quasi fugit?
                  </p>
                </div>
              </SwiperSlide>
            </article>

            <article className="testimonial">
              <SwiperSlide>
                <div className="avatar">
                  <Image src="/assests/avatar5.jpg" width={450} height={450} />
                </div>
                <div className="testimonial">
                  <h5>Jane Doe</h5>
                  <small>physician</small>
                </div>
                <div className="testimonial__body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure cupiditate commodi quas facilis dolores est quia
                    consequuntur dolor voluptates labore, illum sequi officia
                    quaerat velit tempore odit quasi fugit?
                  </p>
                </div>
              </SwiperSlide>
            </article>
          </Swiper>
        </div>
      </section>
    </>
  );
}
