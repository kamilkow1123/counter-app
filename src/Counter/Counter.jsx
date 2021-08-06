import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [ counterValue, setCounterValue ] = useState(0);
    const [ inputValue, setInputValue ] = useState(1);

    return (
        <div>
            <h1 data-testid="header">My Counter</h1>
            <h2 data-testid="counter">{counterValue}</h2>
            <button data-testid="subtract-btn">-</button>
            <input
                data-testid="input"
                className="text-center"
                type="number"
                value={inputValue}
            />
            <button data-testid="add-btn">+</button>
        </div>
    );
};

export default Counter;
