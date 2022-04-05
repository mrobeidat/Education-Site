import React, { useEffect } from "react";
import * as Unicons from "@iconscout/react-unicons";
import aos from "aos";
import "aos/dist/aos.css";
const ContactUs = () => {
  useEffect(() => {
    aos.init({
      disable: false,
      duration: 2000,
    });
  });
  return (
    <>
      <section
        data-aos="fade-down"
        data-aos-offset="50"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top"
        className="content"
      >
        <div className="container contact__container">
          <aside
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-delay="320"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top"
            className="contact__aside"
          >
            <div className="aside__image">
              <img src="./assests/contact.svg" />
            </div>
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
              laboriosam.elit. Qui laboriosam.
            </p>
            <ul className="contact__details">
              <li>
                <Unicons.UilPhoneTimes />
                <h5>+23215123121388</h5>
              </li>
              <li>
                <Unicons.UilEnvelopes />
                <h5>support@help.com</h5>
              </li>
              <li>
                <Unicons.UilLocationPoint />
                <h5>Accra, Ghana</h5>
              </li>
            </ul>

            <ul className="contact__socials">
              <li>
                <a href="https://facebook.com">
                  <Unicons.UilFacebookF />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://instagram.com">
                  <Unicons.UilInstagram />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://twitter.com">
                  <Unicons.UilTwitter />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://linkedin.com">
                  <Unicons.UilLinkedinAlt />
                </a>
              </li>
            </ul>
          </aside>

          <form
            action="https://formspree.io/f/mayvdnnr"
            method="POST"
            target="_blank"
          >
            <div className="form__name">
              <input
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-delay="150"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top"
                type="text"
                name="First Name"
                placeholder="First Name"
                required
              />
              <input
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-delay="220"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top"
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-delay="320"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
              type="email"
              name="Email Address"
              placeholder="Your Email Address"
            />
            <textarea
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-delay="450"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
              name="Message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
            <button
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="470"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top"
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
