import styles from "./Page.module.css";
import Info from "./info/Info";
import Brand from "./brand/Brand";
import BannerPlay from "./bannerPlay/BannerPlay";
import Benefits from "./benefits/Benefits";
import Course from "./course/Course";
import Testimonials from "./testimonials/Testimonials";
import PricingList from "./pricing/Pricing";
import Accordion from "./accardion/Accardion";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Info />
      <Brand />
      <BannerPlay />
      <Benefits />
      <Course />
      <Testimonials />
      <PricingList />
      <Accordion />
    </div>
  );
};

export default Home;
