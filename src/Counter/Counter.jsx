import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [ counterValue, setCounterValue ] = useState(0);
    const [ inputValue, setInputValue ] = useState(1);

    return (
        <div className="counter">
            <div className="counter__container">
                <h1 data-testid="header" className="counter__header">
                    My Counter
                </h1>
                <h2
                    data-testid="counter"
                    className={`counter__value ${counterValue >= 100
                        ? "green"
                        : ""}${counterValue <= -100 ? "red" : ""}`}
                >
                    {counterValue}
                </h2>
                <div className="counter__wrapper">
                    <button
                        data-testid="subtract-btn"
                        onClick={() =>
                            setCounterValue(counterValue - inputValue)}
                        className="counter__button"
                    >
                        -
                    </button>
                    <input
                        data-testid="input"
                        className="counter__input"
                        type="number"
                        value={inputValue}
                        onChange={e => setInputValue(parseInt(e.target.value))}
                    />
                    <button
                        data-testid="add-btn"
                        onClick={() =>
                            setCounterValue(counterValue + inputValue)}
                        className="counter__button"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
