import logo from './logo.svg';
import './App.css';
import React, { useContext }  from 'react';
import InputText from './components/InputText';
import Results from './components/Results';
import Navbar from './components/Navbar';
import NoteContext from './components/NoteContext';

function App() {
  const {mode} = useContext(NoteContext);
  return (
    <div className="App">
      <div className = {`navbar${mode}`}>
      <Navbar/>
      </div>
      <div className={`container${mode}`}>
     <InputText/>
     </div>
     <Results/>
    </div>
  );
}

export default App;
