import React from "react";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Profile from "./components/Profile/Profile.jsx";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={
          <div className="full-div">
            <div className="center-div">
              <Home />
            </div>
          </div>
        } />
        <Route path="/user/login" element={
          <div className="full-div">
            <div className="center-div">
              <Login />
            </div>
          </div>
        } />
        <Route path="/user/signup" element={
          <div className="full-div">
            <div className="center-div">
              <SignUp />
            </div>
          </div>
        } />
        <Route path="/user/profile" element={
          <div className="full-div">
            <div className="center-div">
              <Profile />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
