import React,{useState} from "react";
import './App.css'

function App() {
  const[count, setCount] = useState(0);
  return (
    <div className="Container">
      <div className="center">
        <div className="header">
          <h1>Counter App</h1>
          <div className="body">
            <h2 className="digit">{count}</h2>
            <button className="btn1" onClick={() => setCount(count+1)}>Increment</button>
            <button className="btn2" onClick={() => setCount(count-1)}>Decrement</button>
            <button className="btn3" onClick={() => setCount(0)}>Reset</button>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
