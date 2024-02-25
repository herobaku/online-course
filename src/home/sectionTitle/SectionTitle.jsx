import styles from "./SectionTitle.module.css";
const SectionTitle = (props) => {
  // const {title, button} = props
  return (
    <>
      <div className={styles.sections__group}>
        <p>{props.title}</p>
        <button className={styles.button__view}>{props.button}</button>
      </div>
    </>
  );
};
export default SectionTitle;
