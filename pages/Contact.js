import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const ContactUs = () => {
  return (
    <>
      <section className="content">
        <div className="container contact__container">
          <aside className="contact__aside">
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
                type="text"
                name="First Name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="email"
              name="Email Address"
              placeholder="Your Email Address"
            />
            <textarea
              name="Message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
