import React from 'react';
import ShiftList from "./components/ShiftList";
import { BiPlusMedical } from 'react-icons/bi';

import './App.css';

function App() {
  return (
    <>
    <h1 className="titleHeader"><BiPlusMedical style={{ margin: "10px", marginBottom: "-5px", color: "#E63946"}}/>LocuMotion</h1>
    <ShiftList/>
    <footer>Made with <span className="heart">♥</span> by Ashley Mikkola 2020</footer>
    </>
  );
}

export default App;
