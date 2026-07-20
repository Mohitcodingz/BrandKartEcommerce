import React from 'react'
import styles from './login.module.css'
import { Link } from 'react-router-dom'
export default function Login({onRegister}) {
    
    return (
            <div className={styles.loginContainer}>
                <div className={styles.loginContainerInner}>
                    <h1>Member Login</h1>
                    <form action="/get">
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button >Login</button>
                        <p>Forget Password? <Link to="/">Click Here</Link> </p>
                        <button onClick={onRegister}>Register</button>
                    </form>
                </div>
            </div>
        
    )
}
