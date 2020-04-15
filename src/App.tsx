import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    (async () => {
      // Load module
      const AddModule = await WebAssembly.instantiateStreaming(fetch('./wasm/add.wasm'));
      const AddModuleInstance = AddModule.instance.exports as any;

      // Run calculation
      const result = AddModuleInstance.add(12, 30);
      console.log(result);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
