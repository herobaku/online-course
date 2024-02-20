import styles from "./Testimonials.module.css";

const Testimonials = ()=>{
  return (
    <>
      <section className={styles.testimonials}>
        <h2>Our Testimonials</h2>
        <div className={styles.benefits__group}>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button className={styles.button__view}>View All</button>
        </div>
        <div className={styles.card__group_testimonials}>
          <div className={styles.card__item_testimonials}>
            <div className={styles.card__item_testimonials_top}>
              <p>
                The web design course provided a solid foundation for me. The
                instructors were knowledgeable and supportive, and the
                interactive learning environment was engaging. I highly
                recommend it!
              </p>
            </div>
            <div className={styles.card__item_testimonials_bottom}>
              <div className={styles.card__item_testimonials_field}>
                <div className={styles.card__item_testimonials_author}>
                  <img src="../../public/author.jpeg" alt="author" />
                  <h3>Sarah L</h3>
                </div>
                <button className={styles.btn__light}>Read Full Story</button>
              </div>
            </div>
          </div>
          <div className={styles.card__item_testimonials}>
            <div className={styles.card__item_testimonials_top}>
              <p>
                The web design course provided a solid foundation for me. The
                instructors were knowledgeable and supportive, and the
                interactive learning environment was engaging. I highly
                recommend it!
              </p>
            </div>
            <div className={styles.card__item_testimonials_bottom}>
              <div className={styles.card__item_testimonials_field}>
                <div className={styles.card__item_testimonials_author}>
                  <img src="../../public/author.jpeg" alt="author" />
                  <h3>Sarah L</h3>
                </div>
                <button className={styles.btn__light}>Read Full Story</button>
              </div>
            </div>
          </div>
          <div className={styles.card__item_testimonials}>
            <div className={styles.card__item_testimonials_top}>
              <p>
                The web design course provided a solid foundation for me. The
                instructors were knowledgeable and supportive, and the
                interactive learning environment was engaging. I highly
                recommend it!
              </p>
            </div>
            <div className={styles.card__item_testimonials_bottom}>
              <div className={styles.card__item_testimonials_field}>
                <div className={styles.card__item_testimonials_author}>
                  <img src="../../public/author.jpeg" alt="author" />
                  <h3>Sarah L</h3>
                </div>
                <button className={styles.btn__light}>Read Full Story</button>
              </div>
            </div>
          </div>
          <div className={styles.card__item_testimonials}>
            <div className={styles.card__item_testimonials_top}>
              <p>
                The web design course provided a solid foundation for me. The
                instructors were knowledgeable and supportive, and the
                interactive learning environment was engaging. I highly
                recommend it!
              </p>
            </div>
            <div className={styles.card__item_testimonials_bottom}>
              <div className={styles.card__item_testimonials_field}>
                <div className={styles.card__item_testimonials_author}>
                  <img src="../../public/author.jpeg" alt="author" />
                  <h3>Sarah L</h3>
                </div>
                <button className={styles.btn__light}>Read Full Story</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials;