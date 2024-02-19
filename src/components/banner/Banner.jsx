import styles from "./Banner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__center}>
        <Link to="/" className={styles.banner__text}>
          Free Courses <sup>🌟</sup> Sale Ends Soon, Get It Now
          <FontAwesomeIcon
            className={styles.arrow__right}
            icon={faArrowRight}
          />
        </Link>
      </div>
    </section>
  );
};

export default Banner;
