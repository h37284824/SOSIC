import React from "react";
import Login from "./Login.jsx";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>      
      <div className="App">
        <Route>
          <Route path="/" element= {<Login />}></Route>

          <Route path="/signup" element= {<Signup />}></Route>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
