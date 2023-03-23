import styles from "./Reconnection.module.scss";

const Reconnection = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <div className={styles.shadow}></div>
        <span>RECONNECTION</span>
      </div>
    </div>
  );
};

export default Reconnection;
