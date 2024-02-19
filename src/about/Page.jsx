import styles from "./Page.module.css";

const About = () => {
  const groupContainer = `${styles.container} ${styles.container__border}`
  return (
    <>
      <section className={styles.contact}>
        <div className={groupContainer}>
          <div className={styles.row}>
            <div className={styles.contact__left}>
              <h2>Contact Us</h2>
            </div>
            <div className={styles.contact__right}>
              <p>
                Welcome to SkillBridge's Pricing Plan page, where we offer two
                comprehensive options to cater to your needs: Free and Pro. We
                believe in providing flexible and affordable pricing options for
                our services. Whether you're an individual looking to enhance
                your skills or a business seeking professional development
                solutions, we have a plan that suits you. Explore our pricing
                options below and choose the one that best fits your
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.form}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.form__left}></div>
            <div className={styles.form__right}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
