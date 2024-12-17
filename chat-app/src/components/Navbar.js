import React, { useContext } from 'react'
import footImg from './images/logo.png'
import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import NoteContext from './NoteContext';
import moon from './images/moon(2).jpg';
import sun from './images/sun.jpg';
import menuImg from './images/menu_30dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import menuDarkImg from './images/menu_30dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png'
function Navbar() {
  const {mode , setMode,toggleMenu , menuOpen , setMenuOpen} = useContext(NoteContext)
  const changeMode = () => {
    setMode((prev)=>{
      return prev === 'light' ? 'dark' : 'light';
    })
  }
  return (
    <>
      <div className={`left-items`}>
      <button onClick={toggleMenu} className='menu-button'>
        {mode === 'light' ? <img className = 'menu-icon' src={menuImg}/> : <img className = 'menu-icon' src={menuDarkImg}/>}
        </button>
      </div>
      {menuOpen && (
          <div className={`dropdown-menu${mode}`}>
            <Link to="/" className="dropdown-link" onClick={() => setMenuOpen(false)}>
              <h1 className='menu-item'>Home</h1>
            </Link>
            <Link to="/footprint" className="dropdown-link" onClick={() => setMenuOpen(false)}>
            <h1 className='menu-item'>Carbon Footprint Calculator</h1>
            </Link>
            <Link to="/offset" className="dropdown-link" onClick={() => setMenuOpen(false)}>
            <h1 className='menu-item'>Carbon Offset </h1>
            </Link>
          </div>
        )}
      <div className={`center-items${mode}`}>
      <Link to="/" className={`header-link${mode}`}>
      <h1 className='heading'>CLEAN STEPS</h1>
      </Link>
      <Link to="/" className="nav-link">
      <img src={footImg} className='logo'/>
      </Link>
      </div>
      <div className='right-items'>
        <button className = {`change-mode${mode}`} onClick={changeMode} >
        </button>
      </div>
    </>
  )
}

export default Navbar
