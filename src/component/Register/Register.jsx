import React from 'react'
import styles from './register.module.css'
export default function Register({onLogin}) {
    return (
        <div className={styles.registerContainer}>
            <div className={styles.registerContainerInner}>
                <h1>Register Page</h1>
                <form >
                    <input type="email" placeholder='Email Address' />
                    <input type="username" placeholder='username' />
                    <input type="password" placeholder='Password' />
                    <button> Register</button>
                    <button onClick={onLogin}> Login</button>
                </form>
            </div>
        </div>
    )
}
