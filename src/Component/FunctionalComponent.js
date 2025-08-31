import React,{useState} from "react";
function FunctionalComponent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <p className="count-number">{count}</p>
      <div className="btn-group">
        <button onClick={increment} className="btn plus">+</button>
        <button onClick={decrement} className="btn minus">-</button>
      </div>
    </div>
  );
}
export default FunctionalComponent
