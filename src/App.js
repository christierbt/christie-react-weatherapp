import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          <a
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
