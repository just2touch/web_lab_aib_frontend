import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    const decreaseCounter = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <p>{counter}</p>
            <button id="increase-counter" onClick={increaseCounter}>+1</button>
            <button id="decrease-counter" onClick={decreaseCounter}>-1</button>
        </div>
    );
}

export default Counter;