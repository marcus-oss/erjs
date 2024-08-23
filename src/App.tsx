import "./App.css";

function App() {
  const name = ["Usuario", "Usuario2 ", "Usuario 3", "usuario 2"];
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {name.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;


