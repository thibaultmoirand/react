import logo from './logo.svg';
import './App.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

{/* Voici un commentaire 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      */}
      <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
      </header>
    </div>

  );
    }

export default App;
