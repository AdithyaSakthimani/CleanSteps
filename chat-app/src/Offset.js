import React, { useContext } from 'react'
import NoteContext from './components/NoteContext'
import Navbar from './components/Navbar'
import OffsetTxt from './components/OffsetTxt'
function Offset() {
  const {mode} = useContext(NoteContext)
  return (
    <div>
      <div className = {`navbar${mode}`}>
      <Navbar/>
      </div>
      <OffsetTxt/>
    </div>
  )
}

export default Offset
