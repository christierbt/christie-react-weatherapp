import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity={"Perth"} />
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
    </div>
  );
}

export default App;
