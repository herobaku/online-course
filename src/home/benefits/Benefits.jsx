import SectionTitle from "../sectionTitle/SectionTitle";
import styles from "./Benefits.module.css";

const obj = {
  title:"Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget  habitasse in velit fringilla feugiat senectus in.",
  button: "View All",
};

const Benefits = () => {
  return (
    <>
      <section className={styles.benefits}>
        <h2>Benefits</h2>
        <SectionTitle title={obj.title} button={obj.button} />
        <div className={styles.benefits__card_group}>
          <div className={styles.benefits__card}>
            <div className={styles.card__number}>
              <h2>01</h2>
            </div>
            <div className={styles.card__desc}>
              <h3>Flexible Learning Schedule</h3>
              <p>
                Fit your coursework around your existing commitments and
                obligations.
              </p>
            </div>
            <div className={styles.card__to}>
              <img src="../../public/to.svg" alt="to" />
            </div>
          </div>
          <div className={styles.benefits__card}>
            <div className={styles.card__number}>
              <h2>02</h2>
            </div>
            <div className={styles.card__desc}>
              <h3>Flexible Learning Schedule</h3>
              <p>
                Fit your coursework around your existing commitments and
                obligations.
              </p>
            </div>
            <div className={styles.card__to}>
              <img src="../../public/to.svg" alt="to" />
            </div>
          </div>
          <div className={styles.benefits__card}>
            <div className={styles.card__number}>
              <h2>03</h2>
            </div>
            <div className={styles.card__desc}>
              <h3>Flexible Learning Schedule</h3>
              <p>
                Fit your coursework around your existing commitments and
                obligations.
              </p>
            </div>
            <div className={styles.card__to}>
              <img src="../../public/to.svg" alt="to" />
            </div>
          </div>
          <div className={styles.benefits__card}>
            <div className={styles.card__number}>
              <h2>04</h2>
            </div>
            <div className={styles.card__desc}>
              <h3>Flexible Learning Schedule</h3>
              <p>
                Fit your coursework around your existing commitments and
                obligations.
              </p>
            </div>
            <div className={styles.card__to}>
              <img src="../../public/to.svg" alt="to" />
            </div>
          </div>
          <div className={styles.benefits__card}>
            <div className={styles.card__number}>
              <h2>05</h2>
            </div>
            <div className={styles.card__desc}>
              <h3>Flexible Learning Schedule</h3>
              <p>
                Fit your coursework around your existing commitments and
                obligations.
              </p>
            </div>
            <div className={styles.card__to}>
              <img src="../../public/to.svg" alt="to" />
            </div>
          </div>
          <div className={styles.benefits__card}>
            <div className={styles.card__number}>
              <h2>06</h2>
            </div>
            <div className={styles.card__desc}>
              <h3>Flexible Learning Schedule</h3>
              <p>
                Fit your coursework around your existing commitments and
                obligations.
              </p>
            </div>
            <div className={styles.card__to}>
              <img src="../../public/to.svg" alt="to" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
