
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>{count}</button>
}

function CountDisplay() {
  // This component needs the count variable. What can you do to get access to it?
  return <div>The current counter count is {count}</div>
}

function App() {
  return (
    <div>
      <CountDisplay />
      <Counter />
    </div>
  )
}


// Taken from this article: https://kentcdodds.com/blog/application-state-management-with-react