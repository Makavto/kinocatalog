import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/pages/ErrorPage.module.scss";

function ErrorPage() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        Как неловко! Вы потерялись.
      </h3>
      <div className={styles.text}>
        Вы ищете что-то, чего не существует.
        <br />Вернитесь на главную страницу.
        <br />Таков путь.
      </div>
      <button onClick={() => {router.push('/')}} className="appButton">
        На главную
      </button>
    </div>
  );
}

export default ErrorPage;