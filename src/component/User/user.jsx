import React from 'react'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <div className={Style.userContainer}>
      <h1>Member Login</h1>
      <form action="/get">
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='password' />
        <Button>Login</Button>
        <p>Forget Password? <Link to="/">Click Here</Link> </p>
        <Button >Register</Button>
      </form>
    </div>
  )
}
