import React, { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <Link to='/' >
          <img src="img/logo.png" className="logo" />
        </Link>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Anasayfa</li>
          </Link>
          <Link to='/about' className='about'>
            <li>Hakkımda</li>
          </Link>
          <Link to='/projects' className='services'>
            <li>Projeler</li>
          </Link>
          <Link to='/contact' className='home'>
            <li>İletişim</li>
          </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar