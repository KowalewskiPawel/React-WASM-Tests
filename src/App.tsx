import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAddWasm } from './hooks';

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const result = useAddWasm(numberOne, numberTwo);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="number" value={numberOne} onChange={(event) =>  setNumberOne(Number(event.target.value))} />
        <input type="number" value={numberTwo} onChange={(event) =>  setNumberTwo(Number(event.target.value))} />
        <p>{numberOne} + {numberTwo} = {result}</p>
          THIS IS REACT + WASM + RUST
      </header>
    </div>
  );
}

export default App;
