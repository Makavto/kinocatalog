import styles from "../../styles/components/shared/Spinner.module.scss";

function Loader() {
  return (
    <div className={styles.spinnerBox}>
      <div className={styles.configureBorderOne}>
        <div className={styles.configureCore}></div>
      </div>
      <div className={styles.configureBorderTwo}>
        <div className={styles.configureCore}></div>
      </div>
    </div>
  );
}

export default Loader;