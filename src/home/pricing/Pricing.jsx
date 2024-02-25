import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Pricing.module.css";

const PricingList = () => {
  return (
    <>
      <section className={styles.pricing}>
        <h2>Our Pricing</h2>
        <div className={styles.benefits__group}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button className={styles.button__view}>View All</button>
        </div>
        <div className={styles.form__wrapper}>
          <div className={styles.form__free}>
            <div className={styles.form__free_container}>
              <div className={styles.form__free_title}>
                <h2>Free Plan</h2>
              </div>
              <div className={styles.form__free_price}>
                <h2 className={styles.form__free_price_title}>
                  $0<sub>/month</sub>
                </h2>
              </div>
              <div className={styles.form__free_features}>
                <h2>Available Features</h2>
                <ul className={styles.form__free_features_menu}>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                </ul>
              </div>
              <button className={styles.form__free_button}>Get Started</button>
            </div>
          </div>
          <div className={styles.form__pro}>
            <div className={styles.form__free_container}>
              <div className={styles.form__free_title}>
                <h2>Pro Plan</h2>
              </div>
              <div className={styles.form__free_price}>
                <h2 className={styles.form__free_price_title}>
                  $79<sub>/month</sub>
                </h2>
              </div>
              <div className={styles.form__free_features}>
                <h2>Available Features</h2>
                <ul className={styles.form__free_features_menu}>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                  <li className={styles.form__free_features_menu_list}>
                    <div className={styles.check}>
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <h3 className={styles.title}>
                      Access to selected free courses.
                    </h3>
                  </li>
                </ul>
              </div>
              <button className={styles.form__free_button}>Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingList;
