import "./App.css";
import { useApp } from "./useApp";

function App() {
  const{count, handleIncrement, handleDecrement}=useApp()

  return (
    <div className="App">
     <div className="showCount">
     <h1>Count: {count}</h1>
     </div>
     <div className="showBnt">
     <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
     </div>
    </div>
  );
}

export default App;
