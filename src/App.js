import React, { useState, useEffect } from "react";

import Navbar from "./components/Nav";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    var x = window.matchMedia("(max-width: 600px)");

    console.log("x", x);
  });

  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
