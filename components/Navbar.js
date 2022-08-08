import React from 'react'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div>
        <nav className={styles.mainNav}>
        <ul>
          <Link href='/'>
          <li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blog'><li>Blogs</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
        </ul>

      <hr />
      </nav>
    </div>
  )
}

export default Navbar