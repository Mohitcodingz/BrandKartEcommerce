import React from 'react'
import { Link } from 'react-router-dom'
import styles from './user.module.css'
export default function User() {
  return (
    <div className={styles.userContainer}>
    <div className={styles.userContainerInner}>
      <h1>Member Login</h1>
      <form action="/get">
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button>Login</button>
        <p>Forget Password? <Link to="/">Click Here</Link> </p>
        <button>Register</button>
      </form>
    </div>
    </div>
  )
}
