import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
