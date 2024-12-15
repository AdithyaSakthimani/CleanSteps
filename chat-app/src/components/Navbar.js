import React, { useContext } from 'react'
import footImg from './images/logo.png'
import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import NoteContext from './NoteContext';
import moon from './images/moon(2).jpg';
import sun from './images/sun.jpg';
function Navbar() {
  const {mode , setMode} = useContext(NoteContext)
  const changeMode = () => {
    setMode((prev)=>{
      return prev === 'light' ? 'dark' : 'light';
    })
  }
  return (
    <div className='navbar-items'>
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
    </div>
  )
}

export default Navbar
