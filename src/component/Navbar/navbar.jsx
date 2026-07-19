import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.leftSide}>
                BRANDKART
            </div>
            <div className={styles.rightSide}>
                <Link to="/Shop">Shop</Link> 
                <Link to="/Category">Category</Link> 
                <Link to="/user">User</Link>                  
            </div>
        </div>
    )
}
