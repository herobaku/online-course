import styles from "./Info.module.css";

const Info = () => {
  return (
    <>
      <section className={styles.info}>
        <div className={styles.info__title}>
          <div className={styles.logo__light}>
            <img src="../../public/light.svg" alt="light" />
          </div>
          <h2>
            <strong>Unlock</strong> Your Creative Potential
          </h2>
        </div>
        <div className={styles.info__desc}>
          <h2>with Online Design and Development Courses.</h2>
          <p>Learn from Industry Experts and Enhance Your Skills.</p>
        </div>
        <div className={styles.info__button_group}>
          <button className={styles.button__orange}>Explore Courses</button>
          <button className={styles.button__light}>View Pricing</button>
        </div>
      </section>
    </>
  );
};

export default Info;
