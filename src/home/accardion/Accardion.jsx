import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Accardion.module.css";

const Accordion = () => {
  const accordionBlock = `${styles.accordion__block} ${styles.accordion__block_active}`;
  return (
    <>
      <section className={styles.accordion}>
        <div className={styles.accordion__container}>
          <div className={styles.accordion__left}>
            <div className={styles.accordion__left_desc}>
              <h2>Frequently Asked Questions</h2>
              <p>
                Still you have any questions? Contact our Team via
                support@skillbridge.com
              </p>
            </div>
            <button className={styles.btn__faq}>See All FAQ’s</button>
          </div>
          <div className={styles.accordion__right}>
            <div className={styles.accordion__group}>
              <div className={accordionBlock}>
                <h2>What kind of support can I expect from instructors?</h2>
                <div className={styles.accordion_button}>
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <div className={styles.accordion__block}>
                <h2>What kind of support can I expect from instructors?</h2>
                <div className={styles.accordion_button}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
              <div className={styles.accordion__block}>
                <h2>What kind of support can I expect from instructors?</h2>
                <div className={styles.accordion_button}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
              <div className={styles.accordion__block}>
                <h2>What kind of support can I expect from instructors?</h2>
                <div className={styles.accordion_button}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
              <div className={styles.accordion__block}>
                <h2>What kind of support can I expect from instructors?</h2>
                <div className={styles.accordion_button}>
                  <FontAwesomeIcon icon={faPlus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
