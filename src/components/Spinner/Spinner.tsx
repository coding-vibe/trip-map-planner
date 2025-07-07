import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.wrap}>
      <img src="./airplane.gif" />
    </div>
  );
}
