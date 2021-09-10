import React from "react";
import Display from "./Components/Display";
import Home from "./Components/Home";
import "./App.css"


function App() {
  return (
    <div className="App">

<div className="mainComps">

<div>
    <Home/>
    </div>

    <div className="display">
    <Display/>
    </div>

    </div>
      
    </div>
  );
}

export default App;
