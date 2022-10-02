import React from 'react'
import styles from './Navbar.module.css'
import tclLogo from '../../assets/tclLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoBox}>
          <img className={styles.tclLogo} src={tclLogo} alt="logo" />
        </Link>
      </div>

      <ul className={styles.navItemsContainer}>
        <Link to="/home" className={styles.navItem}>Home</Link>
        <Link to="/productos" className={styles.navItem}>Productos</Link>
        <Link to="/podcasts" className={styles.navItem}>Podcasts</Link>
        <Link to="/about" className={styles.navItem}>Sobre</Link>

        <button className={styles.cartButton}>
          <img src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart--v1.png" alt="cart"/>
          <span className={styles.productQuantity}>0</span>
        </button>
      </ul>
    </nav>
   );
}
 
export default Navbar;