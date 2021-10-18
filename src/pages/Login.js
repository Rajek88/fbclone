import React, { useState } from "react";
import styles from "../styles/login.module.css";
import { useToasts } from "react-toast-notifications";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");

    if (!email || !password) {
      console.log("Please enter Email and Password !");
      return addToast("Please enter Email and Password !", {
        appearance: "error",
      });
    } else {
      setLoggingIn(true);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className={styles.field}>
        <button disabled={loggingIn}>
          {loggingIn ? "Logging In.." : "Log In"}
        </button>
      </div>
    </form>
  );
};

export default Login;
