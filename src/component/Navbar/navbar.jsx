import styles from './navbar.module.css'
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.leftSide}>
                BRANDKART
            </div>
            <div className={styles.rightSide}>
                <a href="#Shop">Shop</a>
                <a href="#Category">Category</a>
                <a href="#Cart">Cart</a>
                <a href="#User">User</a>
            </div>
        </div>

    )
}
