import styles from "./BannerPlay.module.css";

const BannerPlay = () => {
  return (
    <>
      <section className={styles.bannerPlay}>
        <div className={styles.bannerPlay__video}>
          <video src="" poster="../../public/poster.png"></video>
          <div className={styles.bannerPlay__icon}>
            <img src="/public/play.png" className={styles.playButton} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerPlay;
