import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {

  const clickMe = () => {
    window.parent.postMessage(
      JSON.stringify({ functionToRun: "soundAlert", alertMessage: "userInput" }),
      "http://localhost:3000/"
    );
  };

  const clickT = () => {
    document.addEventListener('Holaaaaa 22222')
  }

  React.useEffect(() => {
    window.addEventListener('eventUseEffect', (event) => {
      console.log(event)
    });
    return () => {
      window.removeEventListener('eventUseEffect', () => { });
    };
  });

  const ref = React.useRef(null);

  React.useEffect(() => {
    const handleClick = event => {
      console.log('Button clicked');

      console.log('bobbyhadz.com');
    };

    const element = ref.current;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

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
        <button className='button2' onClick={clickT}>Hola prueba 2</button>
        <button ref={ref}>Click</button>
      </header>
    </div>
  );
}

export default App;
