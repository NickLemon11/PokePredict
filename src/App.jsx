import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import Home from './HomePage';
import Play from './PlayPage';
import Guide from './GuidePage';
import Credits from "./CreditsPage";
import './App.css'

function App() {
  const [page, setPage] = useState("home");

  return ( 
    <>
    <BrowserRouter>
      <div className="menu"> {/* if page is equal to home then add active to the classname else don't*/}
        <Link to="/home">
          <button className={`menu-button ${page === "home" ? "active" : ""}`} onClick={() => setPage("home")}>Home</button> 
        </Link>
        <Link to="/play">
          <button className={`menu-button ${page === "play" ? "active" : ""}`} onClick={() => setPage("play")}>Play</button>
        </Link>
        <div className="menu-logo"><b id="text-logo">Poké Predict</b></div>
        <Link to="/guide">
          <button className={`menu-button ${page === "guide" ? "active" : ""}`} onClick={() => setPage("guide")}>Guide</button>
        </Link>
        <Link to="/credits">
          <button className={`menu-button ${page === "credits" ? "active" : ""}`} onClick={() => setPage("credits")}>Credits</button>
        </Link>
      </div> 
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>

        <Link to="/play">
          <button id="launch" className={`menu-button ${page === "home" ? "" : "hidden"}`} onClick={() => setPage("play")}>LAUNCH</button>
        </Link>

    </BrowserRouter>  
        <footer></footer>
    </>
  )
}

export default App