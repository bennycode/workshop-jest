import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>Counter</h1>
      <p>
        Current count: <span data-testid="counter">{count}</span>
      </p>
      <hr/>
      <Button sign="+" count={count} setCount={setCount}/>
      <Button sign="-" count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
