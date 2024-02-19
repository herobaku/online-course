import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Address
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// Social
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// Module Logo
import Logo from "../../logo/Logo";

const Footer = () => {
  const menuGroup = `${styles.menu} ${styles.menu__horizontal}`;
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.top__left}>
          <Logo />
          <address className={styles.address}>
            <ul className={styles.address__list}>
              <li className={styles.address_link}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Link to="mailto:hello@skillbridge.com">
                  hello@skillbridge.com
                </Link>
              </li>
              <li className={styles.address_link}>
                <FontAwesomeIcon icon={faPhone} />
                <Link to="tel:+91 91813 23 2309">+91 91813 23 2309</Link>
              </li>
              <li className={styles.address_link}>
                <FontAwesomeIcon icon={faLocationDot} />
                <Link to="#">Somewhere in the World</Link>
              </li>
            </ul>
          </address>
        </div>

        <div className={styles.top__right}>
          <nav className={styles.nav}>
            <div className={styles.groupMenu}>
              <h2>Home</h2>
              <ul className={styles.menu}>
                <li className={styles.menu__list}>
                  <Link to="#">Benefits</Link>
                </li>
                <li className={styles.menu__list}>
                  <Link to="#">Our Courses</Link>
                </li>
                <li className={styles.menu__list}>
                  <Link to="#">Our Testimonials</Link>
                </li>
                <li className={styles.menu__list}>
                  <Link to="#">Our FAQ</Link>
                </li>
              </ul>
            </div>
            <div className={styles.groupMenu}>
              <h2>About Us</h2>
              <ul className={styles.menu}>
                <li className={styles.menu__list}>
                  <Link to="#">Company</Link>
                </li>
                <li className={styles.menu__list}>
                  <Link to="#">Achievements</Link>
                </li>
                <li className={styles.menu__list}>
                  <Link to="#">Our Goals</Link>
                </li>
              </ul>
            </div>

            <div className={styles.groupMenu}>
              <h2>Social Profiles</h2>
              <ul className={menuGroup}>
                <li className={styles.menu__list}>
                  <Link to="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li className={styles.menu__list}>
                  <Link to="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li className={styles.menu__list}>
                  <Link to="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2>© 2023 Skillbridge. All rights reserved.</h2>
      </div>
    </footer>
  );
};

export default Footer;
