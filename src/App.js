import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sandrini Lautaro ReactJS App
        </p>
        <a
          className="App-link"
          href="https://github.com/lautisandrini"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub page
        </a>
      </header>
    </div>
  );
}

export default App;
