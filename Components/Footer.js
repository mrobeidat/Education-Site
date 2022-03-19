import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container footer__container">
          <div className="footer__1">
            <Link href="/">
              <a href="" className="footer__logo">
                <h4>Egator</h4>
              </a>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
              reiciendis.
            </p>
          </div>

          <div className="footer__2">
            <h4>Permalinks</h4>
            <ul className="permalinks">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Courses">Courses</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer__3">
            <h4>Privacy</h4>
            <ul className="privacy">
              <li>
                <a href="#">privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer__4">
            <h4>Contact Us</h4>
            <div>
              <p>+01 234 584 9858</p>
              <p>education260@gmail.com</p>
            </div>
            <ul className="footer__socials">
              <li>
                <a href="/">
                  <Unicons.UilFacebookF />
                </a>
              </li>
              <li>
                <a href="/">
                  <Unicons.UilInstagram />
                </a>
              </li>
              <li>
                <a href="/">
                  <Unicons.UilTwitterAlt />
                </a>
              </li>
              <li>
                <a href="/">
                  <Unicons.UilLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <span>Copyright Yousef Obeidat</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
