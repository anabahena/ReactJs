import logo from './logo.svg';
import './App.css';

function App() {

  const clickMe = () => {
    window.parent.postMessage(
      JSON.stringify({ functionToRun: "soundAlert", alertMessage: "userInput" }),
      "http://localhost:3000/"
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={clickMe}>Hola Mundo</button>
      </header>
    </div>
  );
}

export default App;
