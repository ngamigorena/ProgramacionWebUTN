import logo from './logo.svg';
import mdq from './mdqImage.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Naz </h1>
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
      </header>
      <div className="containerh2"> 
        <h2>Pepino</h2>
      </div>
      <div>
        <img src={mdq} className="cityMagen" alt="city" />
      </div>
    </div>
    
  );
}

export default App;
