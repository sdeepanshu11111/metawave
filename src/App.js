import React, { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/navbar";

function App() {
  useEffect(() => {
    var x = window.matchMedia("(max-width: 600px)");

    console.log("x", x);
  });

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
