import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter App</h2>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
