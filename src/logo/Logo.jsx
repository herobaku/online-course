import {Link} from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src="../../public/logo.svg" alt="logo" />
    </Link>
  );
};
export default Logo;
