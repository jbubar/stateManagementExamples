import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  //The above count is being passed two levels deep before being used, is there a way to fix this?
  return (
    <div className="root">
      <h1>Prop Drilling</h1>
      <div className="columns">
        <LeftColumn count={count} onSetCount={setCount} leftThing="I'm on the left" />
        <RightColumn count={count} onSetCount={setCount} rightThing="I'm on the right" />
      </div>
    </div>
  );
}

function LeftColumn({ count, onSetCount, leftThing }) {
  return (
    <div className="left" style={{ paddingRight: 10 }}>
      <h2>{leftThing}</h2>
      <Counter count={count} onSetCount={onSetCount} />
    </div>
  );
}



function RightColumn({ count, onSetCount, rightThing }) {
  return (
    <div className="right">
      <h2>{rightThing}</h2>
      <Counter count={count} onSetCount={onSetCount} />
    </div>
  );
}


function Counter({ count, onSetCount }) {
  return (
    <>
      <input
        type="number"
        style={{ width: "3em" }}
        value={count}
        onChange={(e) => onSetCount(+e.target.value)}
      />
    </>
  );
}