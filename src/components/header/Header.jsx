import { Link } from "react-router-dom";
// CSS
import styles from "./Header.module.css";
// Import Module Page
// import About from "../../about/Page";
// import Pricing from "../../pricing/Page";
// import Contact from "../../contact/Page";
// import Courses from "../../courses/Page";
// Logo
import Logo from "../../logo/Logo";

const Header = () => {
  const buttonLink = `${styles.btn} ${styles.btn__link}`;
  const buttonSuccess = `${styles.btn} ${styles.btn__success}`;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.navigation}>
            <Logo />
            <nav className={styles.nav__menu}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__link}>
                  <Link to="/">Home</Link>
                </li>
                <li className={styles.menu__link}>
                  <Link to="/courses">Courses</Link>
                </li>
                <li className={styles.menu__link}>
                  <Link to="/about">About Us</Link>
                </li>
                <li className={styles.menu__link}>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className={styles.menu__link}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              {/* <Routes>
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes> */}
            </nav>
          </div>
          <div className={styles.button__group}>
            <button className={buttonLink}>Sign Up</button>
            <button className={buttonSuccess}>Login</button>
          </div>
          <button className={styles.burger__menu}>
            <span className={styles.burger__line}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
