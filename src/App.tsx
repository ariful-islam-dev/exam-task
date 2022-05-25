import React, { FC, useState } from "react";
import "./App.css";

const App: FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const handleCountIncrement = () => {
    setCount(count + 1);
    localStorage.setItem('count', count):void
  };

  const handleCountDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleCountDecrement}>-</button>
      <button onClick={handleCountIncrement}>+</button>
    </div>
  );
};

export default App;
