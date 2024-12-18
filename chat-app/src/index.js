import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NoteState from './components/NoteState';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Home';
import Offset from './Offset';
import ChatSpace from './ChatSpace';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteState>
    <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/footprint" element={<App/>} />
    <Route path="/offset" element={<Offset/>} />
    <Route path="/chatspace" element={<ChatSpace/>} />
    </Routes>
    </Router>
    </NoteState>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
