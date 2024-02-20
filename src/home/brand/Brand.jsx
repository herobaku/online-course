import styles from "./Brand.module.css";

const Brand = () => {
  return (
    <>
      <section className={styles.brand}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.brand__item}>
              <img src="../../public/brands/1.png" alt="brand" />
            </div>
            <div className={styles.brand__item}>
              <img src="../../public/brands/2.png" alt="brand" />
            </div>
            <div className={styles.brand__item}>
              <img src="../../public/brands/3.png" alt="brand" />
            </div>
            <div className={styles.brand__item}>
              <img src="../../public/brands/4.png" alt="brand" />
            </div>
            <div className={styles.brand__item}>
              <img src="../../public/brands/5.png" alt="brand" />
            </div>
            <div className={styles.brand__item}>
              <img src="../../public/brands/6.png" alt="brand" />
            </div>
            <div className={styles.brand__item}>
              <img src="../../public/brands/7.png" alt="brand" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
