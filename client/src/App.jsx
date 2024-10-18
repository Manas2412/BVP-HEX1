import React, { useState, useEffect } from "react";
import "./App.css";
import AssignRoles from "./AssignRoles";
import AssignRolesStatic from "./pages/AssignRolesStatic";
import Home from "./Home";
import AddMed from "./AddMed";
import Supply from "./Supply";
import Track from "./Track";
import LandingPage from "./LandingPage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/medl.png" alt="Logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/roles">Assign Roles</Link>
        </li>
        <li>
          <Link to="/addmed">Add Medicine</Link>
        </li>
        <li>
          <Link to="/supply">Supply</Link>
        </li>
        <li>
          <Link to="/track">Track</Link>
        </li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/roles"
            element={
              <>
                <Navbar />
                <AssignRolesStatic />
              </>
            }
          />
          <Route
            path="/addmed"
            element={
              <>
                <Navbar />
                <AddMed />
              </>
            }
          />
          <Route
            path="/supply"
            element={
              <>
                <Navbar />
                <Supply />
              </>
            }
          />
          <Route
            path="/track"
            element={
              <>
                <Navbar />
                <Track />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
