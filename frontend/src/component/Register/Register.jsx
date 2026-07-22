import styles from "./register.module.css";
import { useState } from "react";
import axios from "axios";

export default function Register({ onLogin }) {
  const [user, setUser] = useState({ email: "", password: "", username: "" });

  function registerUser() {
    axios.post("http://localhost:3000/register", user);
  }

  function checkData() {
    console.log(user.email, user.password, user.username);
  }

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerContainerInner}>
        <h1>Register Page</h1>
        <form>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button onClick={checkData}> Register</button>
          <button onClick={registerUser}> Register User</button>
          <button onClick={onLogin}> Login</button>
        </form>
      </div>
    </div>
  );
}
