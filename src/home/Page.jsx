import styles from "./Page.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
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
      <section className={styles.bannerPlay}>
        <div className={styles.bannerPlay__video}>
          <video src="" poster="../../public/poster.png"></video>
          <div className={styles.bannerPlay__icon}>
            <img src="/public/play.png" className={styles.playButton} />
          </div>
        </div>
      </section>
      <section className={styles.benefits}>
        <h2>Benefits</h2>
        <div className={styles.benefits__group}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button className={styles.button__view}>View All</button>
        </div>
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
      <section className={styles.course}>
        <h2>Our Courses</h2>
        <div className={styles.benefits__group}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button className={styles.button__view}>View All</button>
        </div>
        <div className={styles.course__cards_group}>
          <div className={styles.course__cards_item}>
            <div className={styles.course__cards_top}>
              <img src="../../public/image.jpeg" alt="web" />
            </div>
            <div className={styles.course__cards_bottom}>
              <div className={styles.course__cards_group}>
                <div className={styles.course__cards_date}>
                  <button>4 Weeks</button>
                  <button>Beginner</button>
                </div>
                <div className={styles.course__cards_author}>
                  <h4>By John Smith</h4>
                </div>
              </div>
              <div className={styles.course__cards_web}>
                <h2>Web Design Fundamentals</h2>
                <p>
                  Learn the fundamentals of web design, including HTML, CSS, and
                  responsive design principles. Develop the skills to create
                  visually appealing and user-friendly websites.
                </p>
              </div>
              <button className={styles.course__cards_get}>Get it Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.testimonials}></section>
      <section className={styles.pricing}></section>
      <section className={styles.accordion}></section>
    </div>
  );
};

export default Home;
