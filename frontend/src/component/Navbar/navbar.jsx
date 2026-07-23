import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
export default function Navbar() {
    return (
        <div className={styles.navbar}>


            <Link to="/" > Brandkart</Link>

            <div className={styles.searchBar}>
                <input type="text" placeholder='search your thing' />
            </div>
            <div className={styles.rightSide}>
                <Link to="/Shop">Shop</Link>
                <Link to="/Category">Category</Link>
                <Link to="/user">User</Link>
            </div>
        </div>
    )
}
