// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import styles from "./Brand.module.css";

const Brand = () => {
  return (
    <>
      <section className={styles.brand}>
        <div className={styles.container}>
          <Swiper
            slidesPerView={7}
          >
            <SwiperSlide className={styles.brand__item}>
              <img src="../../public/brands/1.png" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className={styles.brand__item}>
              <img src="../../public/brands/2.png" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className={styles.brand__item}>
              <img src="../../public/brands/3.png" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className={styles.brand__item}>
              <img src="../../public/brands/4.png" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className={styles.brand__item}>
              <img src="../../public/brands/5.png" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className={styles.brand__item}>
              <img src="../../public/brands/6.png" alt="brand" />
            </SwiperSlide>
            <SwiperSlide className={styles.brand__item}>
              <img src="../../public/brands/7.png" alt="brand" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Brand;
