import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    if (num2 === "0") {
      setResult("Cannot divide by 0");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div className="calculator">
      <h2>CALCULATOR</h2>

      {/* INPUT 1 */}
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="display"
      />

      {/* INPUT 2 */}
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="display"
      />

      {/* BUTTONS */}
      <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>×</button>
        <button onClick={divide}>÷</button>
      </div>

      {/* RESULT OUTPUT */}
      <div className="result">
        <h3>Result:  {result}</h3>
      </div>
    </div>
  );
}

export default Calculator;