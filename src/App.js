import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Saitamer</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contracts">Contracts</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
