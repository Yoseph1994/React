import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const date = new Date(Date.now());
  date.setDate(date.getDate() + count);

  function handleIncrementCount() {
    setCount((prev) => prev + 1);
  }

  function handleDecrementCount() {
    setCount((prev) => prev - 1);
  }

  return (
    <>
      <div className="count">
        <button onClick={handleDecrementCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleIncrementCount}>+</button>
      </div>

      <span>{date.toDateString()}</span>
    </>
  );
}

export default App;
