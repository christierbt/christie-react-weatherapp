import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <a
          rel="noopener noreferrer"
          href="https://github.com/christierbt/christie-react-weatherapp"
          target="_blank"
        >
          Open Source Code
        </a>{" "}
        by Christie Rosenblatt
      </footer>
    </div>
  );
}

export default App;
