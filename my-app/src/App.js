import logo from './logo.svg';
import './App.css';

function App() {

  const clickMe = () => {
    console.log('clic')
    window.parent.postMessage(
      JSON.stringify({ functionToRun: "soundAlert", alertMessage: 'alertMessage' }),
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
        <button onClick={clickMe}>Hola Mundo</button>
      </header>
    </div>
  );
}

export default App;
