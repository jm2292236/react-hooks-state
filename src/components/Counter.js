import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function doIncrement(count) {
        // Setting state is asynchronous
        // If we want to have access to the actual state value we need to use a callback function
        count = count + 1;
        console.log(count);
        return count;
    }

    function increment() {
        // Setting state is asynchronous
        // If we want to have access to the actual state value we need to use a callback function
        setCount((count) => {count = count + 1; console.log(`count = ${count}`); return count});

        setCount((count) => doIncrement(count));
    }

    return (
        <div>
            <button onClick={increment}>I have been clicked {count} times</button>
        </div>
    )
}

export default Counter;
