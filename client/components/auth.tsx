import styles from "../styles/Home.module.css";

const Auth = () => {
  return (
    <form className={styles.auth_container}>
      <ul className={styles.form_container}>
        <li className={styles.form_title}>
          <h1>Login</h1>
        </li>

        <li className={styles.form_element}>
          <label htmlFor="id">Your Id:</label>
          <input type="text" id="id" name="id" />
        </li>
        <li className={styles.form_element}>
          <label htmlFor="passcode">Your Passcode:</label>
          <input type="password" id="passcode" name="passcode" />
        </li>
        <li className={styles.form_button}>
          <button className={styles.submit_button}>Authenticate</button>
        </li>
      </ul>
    </form>
  )
}

export default Auth;
