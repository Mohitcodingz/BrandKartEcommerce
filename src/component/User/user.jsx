import React, { useState } from 'react'
import styles from './user.module.css'
import Login from '../Login/Login'
import Register from '../Register/register';
export default function User() {
  const [value,setValue ] = useState(true);
  return (
    <div className={styles.userContainer}>

     {
      value ?
      <Login onRegister={()=>setValue(false)}/>:
      <Register onLogin={()=>setValue(true)}/>
     }
    </div>
  )
}
